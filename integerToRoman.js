var intToRoman = function(num) {
    const A = 'IVXLCDM';
    let i = 0;
    let s = '';
    
    while(num > 0) {
        const d = num%10;
        num = Math.floor(num/10);

        if (d >= 1 && d <= 3) {
            s = A[i].repeat(d) + s;
        } else if (d === 4) {
            s = `${A[i]}${A[i+1]}` + s;
        } else if (d >= 5 && d < 9) {
            s = `${A[i+1]}${A[i].repeat(d-5)}` + s;
        } else if (d >= 9 && d <= 10) {
            s = `${A[i].repeat(10-d)}${A[i+2]}` + s;
        }
        i+=2;
    }
    return s;
};

console.log(intToRoman(
    3999
))