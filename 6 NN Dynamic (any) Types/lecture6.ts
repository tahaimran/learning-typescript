// This variable couble any time. Like we do in javascript
let age: any = 25;
age = "Taha";
age = { name: "When", ramp: 6 };

// Also we can use in Array
let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

// For Objects
let objectify: { names: any; belt: any };
objectify = { names: "taha", belt: 25 };
console.log(objectify);

// Kepp in mind TS is created for Explicit Types
