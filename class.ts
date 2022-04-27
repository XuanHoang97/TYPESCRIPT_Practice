// CLASS
export class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }

    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) { }

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender male: ${this.male}`
    }
}

const hoang = new Employee('hoang', 25, true)
// console.log(hoang.name)
// console.log(hoang.age)
// console.log(hoang.male)

// hoang.name = 'name'
// console.log(hoang)

// console.log(hoang.print())

const bob = new Employee('bob', 25, true)

let employees: Employee[] = []
employees.push(hoang)
employees.push(bob)

employees.forEach(e => {
    console.log(e.name, e.male, e.print())
})