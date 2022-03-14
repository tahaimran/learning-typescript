let greet: Function;
// In funcion signature We define what arguments it take and what type of data it returns
// E.G 1
let data : (a:string,b:string) => void;
data = (name:string,belt:string) => {
    console.log(`${name} and ${belt}`)
}

// E.G 2
let calc: (a:number,b:number,c?:string) => number;
calc = (numO:number, numt:number, action?:string) => {
    if(action == "add") {
        return numO + numt;
    }else{
        return numO-numt
    }
}
let result = calc(5,7);

// E.G 3
type userStruct = {name:string,age:number};
let userInfo : (obj:userStruct) => void;
userInfo = (user:userStruct) => {
    console.log(`${user.name} and ${user.age}`)
}