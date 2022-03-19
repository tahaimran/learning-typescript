// importing where from we needed
import { Invoices } from "./classes/invoice";
let invOne = new Invoices("Taha", "Need Urgent Loan", 456);
let invTwo = new Invoices("Shahab", "Need Urgent Product", 800);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.format());
});
const me = {
    name: "taha",
    age: 18,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("spend", amount);
        return amount;
    },
};
const greet = (person) => {
    console.log("hello", person.name);
};
greet(me);
const anchor = document.querySelector("a");
// console.log(anchor.href)
let form = document.querySelector(".new-item-form");
// console.log(form)
let type = document.querySelector("#type");
// console.log(type)
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
