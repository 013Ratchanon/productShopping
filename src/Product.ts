class Product {
    private id:string
     private name:string
      private supplier:string

      constructor (id:string,name:string,supplier:string){
        this.id = id
        this.name = name
        this.supplier = supplier
      }
      public getName():string{
        return this.name
      }
      public setName(Name:string):void{
         this.name
      }
      public getSupplier():string{
         return this.supplier
      }
      public setSupplier(supplier:string):void{
         this.supplier=supplier
      }
      public toString():string{
         return `Product[ID =${this.id},Name = ${this.name},Supplier =${this.supplier}]`
      }
}
export {Product}