var age = function () {
    console.log(17);
};
age();
// Explicitily
var names;
names = function () {
    console.log("Taha");
};
names();
// Giving Paras
var add;
add = function (a, b) {
    console.log(a + b);
};
add(5, 7);
// Optional Para Data Type
var number = function (a, b, c) {
    if (c == "Add") {
        console.log(a + b);
    }
    else {
        console.log(a - b);
    }
};
number(5, 7);
// Return
var mul = function (a, b) {
    return a * b;
};
var result = mul(5, 7);
console.log(result);
// Explicit Return
var div = function (a, b) {
    return a / b;
};
var divResult = div(5, 7);
console.log(result);
