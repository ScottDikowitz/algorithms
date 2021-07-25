var removeDuplicateLetters = function(s) {
    const count = {};
    for(let i = 0; i < s.length; i++) {
        if (count[s[i]] == null) count[s[i]] = 0;
        count[s[i]]++;
    }
    
    const stack = [];
    const v = new Set();
    for(let i = 0; i < s.length; i++)  {
        count[s[i]]--;
        if (v.has(s[i])) continue;
        v.add(s[i]);
        while(stack.length > 0 && stack[stack.length-1] > s[i] && count[stack[stack.length-1]] > 0) {
            v.delete(stack.pop());
        }
        stack.push(s[i]);
    }
    return stack.join('');
};

// console.log(removeDuplicateLetters('cbacdcbc'))
console.log(removeDuplicateLetters('bbcaac'))
// console.log(removeDuplicateLetters('cdab'))