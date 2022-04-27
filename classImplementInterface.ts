import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
    constructor(
        readonly client: string,
        private work: string,
        public amount: number
    ) { }

    print() {
        return `${this.client} owes £${this.amount} for ${this.work}`;
    }
}

export class Payment implements hasPrint {
    constructor(
        readonly recipiend: string,
        private job: string,
        public amt: number
    ) { }

    print() {
        return `${this.recipiend} received £${this.amt} for ${this.job}`;
    }
}