"use strict";
exports.__esModule = true;
exports.Employee = void 0;
// CLASS
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: " + this.name + ", Age: " + this.age + ", Gender male: " + this.male;
    };
    return Employee;
}());
exports.Employee = Employee;
var hoang = new Employee('hoang', 25, true);
// console.log(hoang.name)
// console.log(hoang.age)
// console.log(hoang.male)
// hoang.name = 'name'
// console.log(hoang)
// console.log(hoang.print())
var bob = new Employee('bob', 25, true);
var employees = [];
employees.push(hoang);
employees.push(bob);
employees.forEach(function (e) {
    console.log(e.name, e.male, e.print());
});
