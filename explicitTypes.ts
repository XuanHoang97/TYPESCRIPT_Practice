// EXPLICIT TYPE
let myName: string = 'hoang';
let myAge: number = 20;
let isAuthenticated: boolean = true;

// arrays
let students: string[] = ['hoang', 'nguyen', 'tran'];

// union types
let mixed: (string | number | boolean)[]
mixed = ['hoang', true, 3];

let id: string | number = '123';

let hobby: 'reading' | 'book'

// object
let person: object
person = {
    name: 'hoang',
    age: 20
}
person = [];

let student: {
    name: string,
    age: number,
    isGood: boolean
}

student = {
    name: 'hoang',
    age: 20,
    isGood: true
}