import { Hasformatter } from "../interfaces/Hasformatter.js"
export class Payments implements Hasformatter{    
    constructor(
       readonly recepient: string,
       public details: string,
       private amount: number,
    ){ }

    format() {
        return `${this.recepient} id owed ${this.amount} for ${this.details}`
    }
}