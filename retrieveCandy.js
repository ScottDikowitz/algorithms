/*
I give you a box

A box can either be locked or unlocked
Inside the box you will find: # candy, # inner boxes, # keys
Keys correspond to specific boxes
What is maximum number of candy you can retrieve?

EXAMPLE

I gave you box A

A = { unlocked, 7 candy, boxes=[B, C], keys=[] }

B = { locked, 5 candy, boxes=[D], keys=[] }

C = { unlocked, 4 candy, boxes=[], keys=[B] }

D = { locked, 100 candy, boxes=[], keys=[] }

I give you box A, what is the maximum # of candy you can retrieve? 16

HINT 1: Think, what are the conditions in which a box is "ready" to be opened?

If you discover a new box and it is already unlocked
I have previously found key X, and now I find locked box X
I find key Y, and have already seen locked box Y
*/
function retrieveCandy(boxes, given) {
    let totalCandy = 0;
    const lockedBoxes = new Set();
    const keys = new Set();
    const opened = new Set();
    function helper(boxId=given) {
        opened.add(boxId);
        const curBox = boxes[boxId];
        totalCandy+= curBox.candy;
        curBox.keys.forEach(key => {
            if (!opened.has(key)) {
                if (lockedBoxes.has(key)) {
                    lockedBoxes.delete(key);
                    helper(key);
                } else {
                    keys.add(key);
                }
            }
        });
        curBox.boxes.forEach(box => {
            if (!opened.has(box)) {
                if (!boxes[box].isLocked) {
                    helper(box);
                } else {
                    if (keys.has(box)) {
                        keys.delete(box);
                        helper(box);
                    } else {
                        lockedBoxes.add(box);
                    }
                }
            }
        });

    }
    helper();
    return totalCandy;
}

console.log(retrieveCandy({
    A: { isLocked: false, candy: 7, boxes:['B', 'C'], keys:[] },
    B: { isLocked: true, candy: 5, boxes:['D'], keys:[] },
    C: { isLocked: false, candy: 4, boxes:[], keys:['B'] },
    D: { isLocked: true, candy: 100, boxes:[], keys:[] },
}, 'A'))