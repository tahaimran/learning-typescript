"use strict";
// FOr creating multiple invoices with same structure we will use standard to create it
class Invoices {
    //  instead of writing same code we use constructor;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //  A method we will use return a string value
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
let invOne = new Invoices('Taha', "Need Urgent Loan", 456);
let invTwo = new Invoices('Shahab', "Need Urgent Product", 800);
// WE can create array and allow objects related to class store in it
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
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
