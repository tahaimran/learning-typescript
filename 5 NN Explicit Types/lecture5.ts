// When Initalizing without value we have to give data type explicitily
let character: string;
character = "Taha";
// Union Types

let data : string | number;
data = 43;

// FOr Arrays

let age: number[];
age = [5,8,7];
// Mixed Array
let arrMixed: (string | number | boolean)[] = [];
arrMixed.push("taha");
arrMixed.push(55);
arrMixed.push(true)


// For Objects
let std1 : object;
std1 = {name: "Taha", age: 18};

let students : {
    name: string,
    age : number
}
//  AN object that must must have these peoperties