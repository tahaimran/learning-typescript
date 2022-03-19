import { Invoices } from "./classes/invoice.js";
import { Payments } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/Hasformatter.js";

let docOne: Hasformatter;
let docTwo: Hasformatter;

docOne = new Invoices("Taha", "web task", 350);
docTwo = new Payments("Abdul", "plumbing", 250);

let docArr: Hasformatter[] = [];
docArr.push(docOne);
docArr.push(docTwo);
console.log(docArr);

let invOne = new Invoices("Taha", "Need Urgent Loan", 456);
let invTwo = new Invoices("Shahab", "Need Urgent Product", 800);

let invoices: Invoices[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

invoices.forEach((inv) => {
  // console.log(inv.client, inv.details, inv.format());
});

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "taha",
  age: 18,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    // console.log("spend", amount);
    return amount;
  },
};
const greet = (person: IsPerson) => {
  // console.log("hello", person.name);
};
greet(me);

const anchor = document.querySelector("a")!;
// console.log(anchor.href)

let form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form)

let type = document.querySelector("#type") as HTMLSelectElement;
// console.log(type)

let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc : Hasformatter;

  if (type.value === "invoice") {
    doc = new Invoices(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
