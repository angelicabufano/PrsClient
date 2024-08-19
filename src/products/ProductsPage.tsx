import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function ProductsPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Products</h2>
        <Link to={"/products/create"} role="button1" className="btn btn-primary p-2">
          + Add Product
        </Link>
      </nav>

<hr />
      <ProductList />
    </>
  );
}

export default ProductsPage;