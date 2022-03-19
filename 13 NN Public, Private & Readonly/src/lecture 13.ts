// FOr creating multiple invoices with same structure we will use standard to create it
class Invoices{
    //  readonly client: string;
    //   public details: string;
    //   private amount: number;

  
    //  For optimizing code we can use modifiers with constructor
    
    //  instead of writing same code we use constructor;
     constructor(
        //  Modifiers will help us to limit access
        readonly client: string,
        public details: string,
        private amount: number,
     ){ }

    //  A method we will use return a string value
     format() {
         return `${this.client} owes ${this.amount} for ${this.details}`
     }
}

let invOne = new Invoices('Taha', "Need Urgent Loan", 456);
let invTwo = new Invoices('Shahab', "Need Urgent Product", 800);

// WE can create array and allow objects related to class store in it
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

