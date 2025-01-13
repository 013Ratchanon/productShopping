"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lineitem = void 0;
class Lineitem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    toString() {
        return `Lineitems :[Quantity =${this.quantity},Price = ${this.price},Product =${this.product.toString()}]`;
    }
}
exports.Lineitem = Lineitem;
