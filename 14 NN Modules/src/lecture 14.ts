// importing where from we needed
import {Invoices} from './classes/invoice'

let invOne = new Invoices('Taha', "Need Urgent Loan", 456);
let invTwo = new Invoices('Shahab', "Need Urgent Product", 800);

let invoices: Invoices[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices)

invoices.forEach(inv=> {
 console.log(inv.client, inv.details, inv.format())
})


const anchor = document.querySelector('a')!;
// console.log(anchor.href)


let form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form)

let type = document.querySelector('#type') as HTMLSelectElement;
// console.log(type)

let tofrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit' , (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    );
})

