"use strict";
function makeName(first, last) {
    return first + " , " + last;
}
//default params
function makeName2(first, last, salute) {
    if (salute === void 0) { salute = "Mr"; }
    return salute + "." + first + " , " + last;
}
console.log(makeName2("Bala", "krishna", "Mrs"));
//optional params
function makeName3(first, last, salute) {
    return salute + "." + first + " , " + last;
}
console.log(makeName3("Bala", "krishna"));
function Person(username, age) {
    this.username = username;
    this.age = age;
    this.describe = function () {
        return "Name:" + this.username;
    };
}
var p1 = new Person("James", 24);
console.log(p1.describe());
var pref = p1.describe;
console.log(pref());
//overloading
//function types
var makeName1 = function (first, last) { return first + " , " + last; };
function nameMaker(first, last, callback) { }
nameMaker("a", "b", function () { });
