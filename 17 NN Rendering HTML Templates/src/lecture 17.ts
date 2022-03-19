import { Invoices } from "./classes/invoice.js";
import { ListTemplates } from "./classes/ListTemplate.js";
import { Payments } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/Hasformatter.js";



let form = document.querySelector(".new-item-form") as HTMLFormElement;

let type = document.querySelector("#type") as HTMLSelectElement;

let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc : Hasformatter;

  if (type.value === "invoice") {
    doc = new Invoices(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end')
});
