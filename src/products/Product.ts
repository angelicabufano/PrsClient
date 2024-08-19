import { Vendor } from "../vendors/Vendor";

export class Product {
    id: number | undefined = undefined;
    partNbr = "";
    name = "";
    price = "";
    unit = "";
    photoPath = "";
    vendorId: number | undefined = undefined;
    vendor: Vendor | undefined; 
    

  
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.partNbr) this.partNbr = initializer.partNbr;
      if (initializer.name) this.name = initializer.name;
      if (initializer.firstName) this.price = initializer.firstName;
      if (initializer.lastName) this.unit = initializer.lastName;
      if (initializer.photoPath) this.photoPath = initializer.photoPath;
      if (initializer.vendorId) this.vendorId = initializer.vendorId;
      if (initializer.vendor) this.vendor = initializer.vendor;
   
    }
  }
  