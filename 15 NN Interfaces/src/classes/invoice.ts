// Exporting to other file
export class Invoices{    
     constructor(
        readonly client: string,
        public details: string,
        private amount: number,
     ){ }

     format() {
         return `${this.client} owes ${this.amount} for ${this.details}`
     }
}