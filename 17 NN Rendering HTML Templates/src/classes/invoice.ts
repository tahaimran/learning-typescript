// Exporting to other file
import { Hasformatter } from "../interfaces/Hasformatter.js"
export class Invoices implements Hasformatter{    
     constructor(
        readonly client: string,
        public details: string,
        private amount: number,
     ){ }

     format() {
         return `${this.client} owes ${this.amount} for ${this.details}`
     }
}