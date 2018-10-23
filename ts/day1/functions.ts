function makeName(first: string, last: string): string {
  return `${first} , ${last}`;
}

//default params
function makeName2(first: string, last: string, salute: string = "Mr"): string {
  return `${salute}.${first} , ${last}`;
}

console.log(makeName2("Bala", "krishna", "Mrs"));

//optional params
function makeName3(first: string, last: string, salute?: string): string {
  return `${salute}.${first} , ${last}`;
}

console.log(makeName3("Bala", "krishna"));

function Person(username: string, age: number) {
  this.username = username;
  this.age = age;
  this.describe = function() {
    return `Name:${this.username}`;
  };
}

var p1 = new Person("James", 24);
console.log(p1.describe());
var pref = p1.describe;
console.log(pref());

//overloading

//function types

let makeName1 = (first: string, last: string): string => `${first} , ${last}`;

type CallBackType = () => void;

function nameMaker(first: string, last: string, callback: CallBackType) {}

nameMaker("a", "b", function() {});
