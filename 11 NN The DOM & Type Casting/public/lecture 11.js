"use strict";
const anchor = document.querySelector('a');
// console.log(anchor.href)
let form = document.querySelector('.new-item-form');
// console.log(form)
let type = document.querySelector('#type');
// console.log(type)
let tofrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
