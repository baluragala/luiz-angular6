var username = "James";

var multiLine = "Line 1 " + username + " \n";
multiLine += "Line 2";

var multiLine1 = `Line 1 ${username.toUpperCase()}
Line 2`;

console.log(multiLine);
console.log(multiLine1);
