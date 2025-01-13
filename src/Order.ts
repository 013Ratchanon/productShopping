import { Lineitem } from './Lineitem';
import { OrderState } from './OrderState';
export class Order {
    private number: string;
    private ordered: string;
    private shipped: string | null;
    private ship_to: string;
    private status: OrderState; 
    private total: number;
    private lineItems:Lineitem[]=[]

    constructor(
        number: string,
        ordered: string,
        ship_to: string,
        status: OrderState,
        total: number,
        shipped: string ,

        
    ) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderState.NEW;
        this.total = 0;
    }

    public calculatateTotal():number{
        let totalPrice = 0;
        for(let i = 0; i < this.lineItems.length; i++){
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity()
        }
        return totalPrice;
    }
    public getNumber(): string {
        return this.number;
    }

    public getOrderedDate(): string {
        return this.ordered;
    }

    public setOrderedDate(ordered:string): void{
        this.ordered =ordered
    }

    public getShipped(): string | null {
        return this.shipped;
    }

    public setShipped(shipped:string): void {
        this.shipped = shipped;
    }

    public getShipToAddress(): string {
        return this.ship_to;
    }

    public setShipToAddress(address: string): void {
        this.ship_to = address;
    }

    public getStatus(): OrderState {
        return this.status;
    }

    public setStatus(status: OrderState): void {
        this.status = status;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }


    public toString(): string {
        return `Order [Number: ${this.number}, Ordered Date: ${this.ordered}, Shipped : ${this.shipped }, Ship To: ${this.ship_to}, Status: ${this.status}, Total: ${this.total}]`;
    }
}
