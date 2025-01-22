import { LineItem } from "./Lineitem";

class ShoppingCart  {
    private lineItems: LineItem[] = []
    private created: string

    constructor( created: string) {
        this.created = created;
    }

    public getCreated(): string {
        return this.created
    }

    public setCreated(create: string): void {
        this.created = create
    }
public getLineItem():LineItem[]{
    return this.lineItems
}
public setLineItem(lineItems:LineItem):void{
    this.lineItems.push(lineItems)
}

    public toString(): string {
        return `ShoppingCart | [Created: ${this.created}]]`
    }

}

export { ShoppingCart }