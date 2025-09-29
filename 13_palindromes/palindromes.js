const palindromes = function (string) {
    let remove = ['.', ',', ' ', '!'];
    string = string.replace([...remove], '');
    for (s of remove) {
        string = string.replaceAll(s, '');
    }
    string = string.toLowerCase();
    if (string === reverse(string)) {
        return true;
    }
    console.log(string + " " + reverse(string));
    return false;
    
};

function reverse(string) {
    return string.split("").reverse().join("");
}

function reverseLoop(string) {
    let str = "";
    for (i = 0; i < string.length; i++) {
        str = string.charAt(i) + str;
    }
    return str;
}

// Do not edit below this line
module.exports = palindromes;
