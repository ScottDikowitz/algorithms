// Design a data structure that support the following methods:

class Stream {
    nonunique = new Set();
    unique = new Set();
    add = (num) => {
        if (!this.nonunique.has(num)) {
            if (this.unique.has(num)) {
                this.unique.delete(num);
                this.nonunique.add(num);
            } else {
                this.unique.add(num);
            }
        }
    }

    getFirstUnique = () => {
        if (this.unique.size > 0) {
            return this.unique.values().next().value;
        } else {
            return null;
        }
    }
}

// public class Stream {
    
//     public Stream() {
//         // do intialization if necessary
//     }

// 	/**
// 	* Adds integer num to a stream of integers.
// 	*/
//     public void add(int num) {
//         // write your code here
//     }

// 	/**
// 	*  Returns the first unique integer in the stream if found else return null.
// 	*/
//     public Integer getFirstUnique() {
//         // write your code here
//     }
// }
// Example:

const s = new Stream();
s.add(2);
console.log(s.getFirstUnique()); // 2
s.add(2);
console.log(s.getFirstUnique()); // null
s.add(3);
console.log(s.getFirstUnique()); // 3
s.add(4);
console.log(s.getFirstUnique()); // 3
s.add(3);
console.log(s.getFirstUnique()); // 4
