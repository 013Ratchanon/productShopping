"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebUser_1 = require("./WebUser");
const Customer_1 = require("./Customer");
const Product_1 = require("./Product");
const Lineitem_1 = require("./Lineitem");
console.log("############## User ############");
const user1 = new WebUser_1.WebUser("013", "123456");
console.log(user1.toString());
console.log("############## Customer ############");
const customer1 = new Customer_1.Customer(user1, "CO33", "Mars", "0946475522", "664259013@webmail.npru.ac.th");
console.log(customer1.toString());
console.log("############## Product ############");
const product1 = new Product_1.Product("P001", "Lays", "Lays_co.th");
console.log(product1.toString());
console.log("############## LineItem ############");
const lineitem1 = new Lineitem_1.Lineitem(50, 100, product1);
console.log(lineitem1.toString());
