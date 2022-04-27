"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.work;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipiend, job, amt) {
        this.recipiend = recipiend;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return this.recipiend + " received \u00A3" + this.amt + " for " + this.job;
    };
    return Payment;
}());
exports.Payment = Payment;
