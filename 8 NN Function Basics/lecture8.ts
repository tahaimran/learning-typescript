let age = () => {
    console.log(17)
}
age();

// Explicitily
let names: Function;
names = () => {
    console.log("Taha")
}
names();

// Giving Paras

let add : Function;
add = (a:number,b:number) => {
    console.log(a+b);
}
add(5,7)

// Optional Para Data Type
let number = (a: number, b: number, c?:string) => {
    if (c == "Add"){
        console.log(a+b)
    }else{
        console.log(a-b)
    }
}
number(5,7)


// Return
let mul = (a:number,b:number) => {
    return a*b;
}
let result:number = mul(5,7);
console.log(result)


// Explicit Return
let div = (a:number,b:number):number => {
    return a/b;
}
let divResult:number = div(5,7);
console.log(result)









