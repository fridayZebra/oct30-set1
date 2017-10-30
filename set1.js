'use strict';
function whoAmI(name, age) {
    let yearOfBirth = 2017 - age;
    console.log(`Hi, my ${name} is Firoz and I'm ${age} years old`);
    console.log("I was born in " + yearOfBirth);
};
whoAmI('firoz', 25);