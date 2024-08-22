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
      <article className="card p-4" style={{ width: "20rem", height: "16rem"}} key={product.id}>
        <div className="d-flex justify-content-end">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <svg className=" m-2 text-primary" width={18} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
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
        </div>
        <big> {product.name} </big>

        <small>
          <div>
            ${product.price} / {product.unit}{" "}
          </div>
          <br />
          <div>
            <div> {product.vendor?.name} </div>
            <div className="badge text-bg-primary"> {product.partNbr} </div>
          </div>
        </small>
      </article>
    </div>
  );
}

export default ProductCard;
