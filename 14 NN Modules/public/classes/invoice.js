// FOr creating multiple invoices with same structure we will use standard to create it
export class Invoices {
    //  instead of writing same code we use constructor;
    constructor(
    //  Modifiers will help us to limit access
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //  A method we will use return a string value
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
