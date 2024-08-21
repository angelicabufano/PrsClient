import { Product } from "../products/Product";
import { User } from "../users/User";


export class RequestLines {
  id: number | undefined = undefined;
  quantity: number | undefined;

  requestId: number | undefined;
  request: Request | undefined;

  productId: number | undefined;
  product: Product | undefined;

  user: User | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.requestId) this.requestId = initializer.requestId;
    if (initializer.productId) this.productId = initializer.productId;
    if (initializer.quantity) this.quantity = initializer.quantity;
  }
}
