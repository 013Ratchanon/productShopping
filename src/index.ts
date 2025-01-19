import { WebUser } from "./WebUser";
import { UserState } from "./UserState";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { Order } from "./Order";
import { LineItem } from './Lineitem';

console.log("############## User ############");

const user1 = new WebUser("013", "123456");
console.log(user1.toString());

console.log("############## Customer ############");
const customer1 = new Customer(user1, "CO33", "Mars", "0946475522", "664259013@webmail.npru.ac.th");
console.log(customer1.toString());

console.log("############## Product ############");
const product1 = new Product("P001", "Lays", "Lays_co.th",);
console.log(product1.toString());

console.log("############## LineItem ############");
const lineitem1 = new LineItem(50, 100, product1);
console.log(lineitem1.toString()); 