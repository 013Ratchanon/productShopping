"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItems = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(create) {
        this.created = create;
    }
    getLineItem() {
        return this.lineItems;
    }
    setLineItem(lineItems) {
        this.lineItems.push(lineItems);
    }
    toString() {
        return `ShoppingCart | [Created: ${this.created}]]`;
    }
}
exports.ShoppingCart = ShoppingCart;
