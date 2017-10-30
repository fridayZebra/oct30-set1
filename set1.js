'use strict';

function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log("I was born in " + yearOfBirth(age));
};

function yearOfBirth(age) {
    if (name = undefined, age <= 0) {
        throw new Error('Not a real person')
    } 
    else {   
        return 2017 - age;
    }
}

whoAmI('john');

// try {
//     whoAmI('ted', -1)
// } catch(e) {
//     console.error(e)
// }