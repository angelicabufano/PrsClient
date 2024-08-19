import { Product } from "./Product";
import { SyntheticEvent } from "react";
import { Dropdown } from "react-bootstrap";

interface ProductCardProps {
  product: Product;
  onRemove: (product: Product) => void;
}

function ProductCard({ product, onRemove }: ProductCardProps) {
  return (
    <div>
      <article className="card p-4" style={{ width: "18rem" }} key={product.id}>
        <strong> {product.name} </strong>

        <small>
          <span className="badge text-bg-secondary">{product.price}</span>
          <div>{product.unit}</div>
          <div>
            {product.vendorId} 
          </div>
          {product.photoPath}
        </small>
        <small></small>
        <Dropdown align="end">
          <Dropdown.Toggle variant="link" bsPrefix="p-0">
            &#x22EE;
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={`/products/edit/${product.id}`}>Edit</Dropdown.Item>
            <Dropdown.Item
              onClick={(event: SyntheticEvent) => {
                event.preventDefault();
                onRemove(product);
              }}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </article>
    </div>
  );
}

export default ProductCard;
