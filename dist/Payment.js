"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, total, details, account = null) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
        this.orders = [];
        this.account = account;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getPaid() {
        return this.paid;
    }
    setPaid(paid) {
        this.paid = paid;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getDetails() {
        return this.details;
    }
    setDetails(details) {
        this.details = details;
    }
    getOrders() {
        return this.orders;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getAccount() {
        return this.account;
    }
    setAccount(account) {
        this.account = account;
    }
    toString() {
        return `Payment ID: ${this.id}, Paid Date: ${this.paid}, Total: ${this.total}, Details: ${this.details}`;
    }
}
exports.Payment = Payment;
