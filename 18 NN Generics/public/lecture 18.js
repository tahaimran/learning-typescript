"use strict";
// Generics allow us to create reusable blocks of code which can use diff types
// Placing anngle brackets and then big (T) in front of a function
// const addUID = <T> (obj : T) => {
//     let uid = Math.floor(Math.random() *100);
//     return{...obj, uid}
// }
// let docOne = addUID({name : "Taha"});
// OR
// In above we are not specifying object type
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Taha" });
// Using generics to tackale this erroe
console.log(docOne.name);
const docTh = {
    uid: 1,
    resName: "taha",
    data: "When"
};
console.log(docTh.data);
