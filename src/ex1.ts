// Byt ut alla "any" till passande typ
const firstname: any = "Sandra";
const age: any = 25;
const isBirthday: any = false;

const greet = (firstname: any, age: any, isBirthday: any): any => {

    console.log(`Hey ya! ${firstname}, age ${age}, do you have a birthday today? ${isBirthday}`);

};

greet(firstname, age, isBirthday);

const sum = (num1: any, num2: any): any => num1 + num2;

sum(1, 2);


const names = ["Sandra", "Stina", "Torsten"];

names.forEach(person => {console.log(`Hi you one of all ${person}`)});