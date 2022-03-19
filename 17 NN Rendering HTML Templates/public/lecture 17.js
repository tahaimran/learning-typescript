import { Invoices } from "./classes/invoice.js";
import { ListTemplates } from "./classes/ListTemplate.js";
import { Payments } from "./classes/payment.js";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoices(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
