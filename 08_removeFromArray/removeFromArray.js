const removeFromArray = function(array, ...args) {
    for (num of args) {
        while ( (id = array.findIndex((x) => x === num)) != -1) {
            array.splice(id, 1);
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
