// FUNCTION SIGNATURE
// let greet: (a: string, b: string) => void
// greet = (name: string, greeting: string) =>
//     console.log(`${greeting} ${name}`)
// greet('John', 'Hello')

// let calculate: (a: number, b: number, c: string) => number
// calculate = (num1: number, num2: number, action: string) =>
//     action === 'add' ? num1 + num2 : num1 - num2
// console.log(calculate(10, 5, 'add'))

type Student = { name: string, age: number }
let printStudent: (student: Student) => void
printStudent = ({ name, age }: Student) => {
    console.log(`${name} is ${age} years old`)
}
printStudent({ name: 'hoang', age: 25 })