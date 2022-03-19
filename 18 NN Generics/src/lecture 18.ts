// Generics allow us to create reusable blocks of code which can use diff types

// Placing anngle brackets and then big (T) in front of a function
// const addUID = <T> (obj : T) => {
//     let uid = Math.floor(Math.random() *100);
//     return{...obj, uid}
// }
// let docOne = addUID({name : "Taha"});

// OR

// In above we are not specifying object type
const addUID = <T extends object> (obj : T) => {  //for more specific instead of object add {name : string}
    let uid = Math.floor(Math.random() *100);
    return{...obj, uid}
}


let docOne = addUID({name : "Taha"});

// Using generics to tackale this erroe
console.log(docOne.name)


// Using Generics with Interface
// interface Resource{
//     uid: number;
//     resName: string;
//     data: "???" //if we want multiple types then
// }
interface Resource <T>{
        uid: number;
        resName: string;
        data: T;
}
const docTh : Resource<string>= {
    uid: 1,
    resName: "taha",
    data: "When"
}
console.log(docTh.data)