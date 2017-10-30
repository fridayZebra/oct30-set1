'use strict';

function yearOfBirth(age) {
 return 2017 - age;
}

function whoAmI(name, age) {
    let yearOfBirth = 2017 - age; 
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log("I was born in " + yearOfBirth(25));     
};


whoAmI('john', 25);

