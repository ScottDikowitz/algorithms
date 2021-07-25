// 1739. Building Boxes

/*
You have a cubic storeroom where the width, length, and height of the room are all equal to n units. You are asked to place n boxes in this room where each box is a cube of unit side length. There are however some rules to placing the boxes:

You can place the boxes anywhere on the floor.
If box x is placed on top of the box y, then each side of the four vertical sides of the box y must either be adjacent to another box or to a wall.
Given an integer n, return the minimum possible number of boxes touching the floor.
*/

/**
 * @param {number} n
 * @return {number}
 */
 var minimumBoxes = function(n) {
     if (n <= 3) return n;
    //  function helper(row) {
    //     if (row < 2) return row;
    //     minimumBoxes(row-1) + 

    //  }
    let totalBoxes = 0;
    let lastFloor = 0;
    let prevTotalBoxes = 0;
    for(let i = 1; i < 200; i++) {
        totalBoxes = totalBoxes + i + lastFloor;
        console.log(totalBoxes)
        if (n <= totalBoxes) {
            return totalBoxes - prevTotalBoxes;
        }
        prevTotalBoxes = totalBoxes;
        lastFloor = lastFloor + i;
    }
    return totalBoxes
};

console.log(minimumBoxes(35))