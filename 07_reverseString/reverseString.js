const reverseString = function(string) {
    let ans = "";
    for (i = 0; i < string.length; i++) {
        ans = string.at(i) + ans;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
