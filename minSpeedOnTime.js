/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
 var minSpeedOnTime = function(dist, hour) {
    let min = 1;
    let max = 10 ** 7 + 5;
    function isValidSpeed(speed) {
        let curDistance = 0;
        dist.forEach((distance, i) => {
            if (i === dist.length - 1) {
                curDistance += (distance / speed);
            } else {
                curDistance += Math.ceil(
                    distance / speed
                );

            }
        });
        return curDistance <= hour;
    }
    
    while (min < max) {
        const speed = Math.floor((min + max) / 2);
        const validSpeed = isValidSpeed(speed);
        if (validSpeed) {
            max = speed;
        } else {
            min = speed + 1;
        }
    }
    return isValidSpeed(min) ? min : -1;
};

// console.log(minSpeedOnTime([1,3,2], 6))
// console.log(minSpeedOnTime([1,3,2], 2.7))
console.log(minSpeedOnTime([1,3,2,4,11], 5))