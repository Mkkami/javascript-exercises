const findTheOldest = function(arr) {
    let year = new Date();
    year = year.getFullYear();

    let ans = arr.reduce((max, current) => {
        let death;
        if ("yearOfDeath" in current) {
            death = current.yearOfDeath;
        } else {
            death = year;
        }
        let age = death - current.yearOfBirth;
        if (max.age < age) {
            max.age = age;
            max.name = current.name;
        }
        return max;
    }, {name:"", age: 0});

    return ans;
};
// Do not edit below this line
module.exports = findTheOldest;
