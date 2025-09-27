const sumAll = function(a, b) {
    if (a % 1 != 0 || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    if (a > b) {
        x = b;
        b = a;
        a = x;
    }
    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
