function gcf (a,b) {
    if (a === b) return a;
    if (a === 0) return b;
    if (b === 0) return a;
    console.log(a,b)
    if (a > b) {
        return gcf(a-b, b);
    } else {
        return gcf(a, b-a);
    }
}

console.log(gcf(11,10));
