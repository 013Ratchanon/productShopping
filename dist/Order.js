"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderState_1 = require("./OrderState");
class Order {
    constructor(number, ordered, ship_to, status, total, shipped) {
        this.lineItems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderState_1.OrderState.NEW;
        this.total = 0;
    }
    calculatateTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.ordered;
    }
    setOrderedDate(ordered) {
        this.ordered = ordered;
    }
    getShipped() {
        return this.shipped;
    }
    setShipped(shipped) {
        this.shipped = shipped;
    }
    getShipToAddress() {
        return this.ship_to;
    }
    setShipToAddress(address) {
        this.ship_to = address;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    toString() {
        return `Order [Number: ${this.number}, Ordered Date: ${this.ordered}, Shipped : ${this.shipped}, Ship To: ${this.ship_to}, Status: ${this.status}, Total: ${this.total}]`;
    }
}
exports.Order = Order;
