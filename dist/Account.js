"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const ShoppingCart_1 = require("./ShoppingCart");
class Account {
    constructor(orders = [], shoppingCart = [], accountId, billing_address, is_closed, open, closed) {
        this.payments = [];
        this.orders = [];
        this.shoppingCart = new ShoppingCart_1.ShoppingCart("22-1-2568");
        this.accountId = accountId;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    getId() {
        return this.accountId;
    }
    getBilling_address() {
        return this.billing_address;
    }
    setBilling_address(billing_address) {
        this.billing_address = billing_address;
    }
    getIs_closed() {
        return this.is_closed;
    }
    setIs_closed(is_closed) {
        this.is_closed = is_closed;
    }
    getOpen() {
        return this.open;
    }
    setOpen(open) {
        this.open = open;
    }
    getClosed() {
        return this.closed;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    addOrder(orders) {
        this.orders.push(orders);
    }
    getOrders() {
        return this.orders;
    }
    addPayments(payments) {
        this.payments.push(payments);
    }
    getPayments() {
        return this.payments;
    }
    getShoppingCarts() {
        return this.shoppingCart;
    }
    toString() {
        return `Account | [id: ${this.accountId}, billing_address: ${this.billing_address}, is_closed: ${this.is_closed}, open: ${this.open}, closed: ${this.closed},]]`;
    }
}
exports.Account = Account;
