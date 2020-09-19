/*
A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].
Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.
Input: (person 0 paid person 1 $10, person 2 paid person 0 $5.)
[[0,1,10], [2,0,5]]
Output: 2
// Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.
*/

// minMax recursive algorithm? 
// build map that looks like this 
// 0: -4
// 1: +4
// 2: 0
// we dont care about any individual's debt, we only care about balancing the whole, so only record how much money they have
// 0:-4
// 1:+5
// 2:-1
// keep track of total amount of debt owed, and how much remaining? so we can prune (reduce) number of recursive calls.
var minTransfers = function(transactions) {
    if (!transactions) return 0;
    const cash = {};
    transactions.forEach(transaction => {
        const [sender, receiver, amount] = transaction;
        if (cash[sender] == null) {
            cash[sender] = -amount;
        } else {
            cash[sender] -= amount;
        }
        if (cash[receiver] == null) {
            cash[receiver] = amount;
        } else {
            cash[receiver] += amount;
        }
    });
    const pos = [];
    const neg = [];
    let totalDebt = 0;
    for(let key in cash) {
        if (cash[key] > 0) {
            pos.push(cash[key]);
        } else if (cash[key] < 0) {
            neg.push(cash[key]);
            totalDebt -= cash[key];
        }
    }
    const arr = [];
    arr.push(...pos, ...neg);
    function helper (i=0, count=0) {
        if (i >= arr.length) {
            return count;
        }   
        let min = Infinity;
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i] > 0 && arr[j] < 0) {
                arr[j] += arr[i];
                min = Math.min(min, helper(i+1, count+1));
                arr[j] -= arr[i];
            }
        }
        return min;
    }
    return helper();
};
console.log(minTransfers([[0,1,10], [2,0,5]]))