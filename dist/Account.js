"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billingAddress, isClosed, open, closed = null) {
        this.id = id;
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.open = open;
        this.closed = closed;
        this.payments = [];
        this.orders = [];
    }
    getId() {
        return this.id;
    }
    getBillingAddress() {
        return this.billingAddress;
    }
    setBillingAddress(address) {
        this.billingAddress = address;
    }
    getIsClosed() {
        return this.isClosed;
    }
    setIsClosed(isClosed) {
        this.isClosed = isClosed;
    }
    getOpen() {
        return this.open;
    }
    getClosed() {
        return this.closed;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    getPayments() {
        return this.payments;
    }
    addPayment(payment) {
        this.payments.push(payment);
    }
    getOrders() {
        return this.orders;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    toString() {
        var _a;
        return `Account ID: ${this.id}, Billing Address: ${this.billingAddress}, Is Closed: ${this.isClosed}, Open Date: ${this.open}, Closed Date: ${(_a = this.closed) !== null && _a !== void 0 ? _a : "N/A"}`;
    }
}
exports.Account = Account;
