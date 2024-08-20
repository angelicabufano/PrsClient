import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function ProductsPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Products</h2>
        <Link to={"/products/create"} role="button1" className="btn btn-primary">
        <svg className="bi m-2" width="20" height="20" fill="currentColor">
                <use xlinkHref={`${bootstrapIcons}#plus`} />
              </svg>  Create a Product
        </Link>
      </nav>

<hr />
      <ProductList />
    </>
  );
}

export default ProductsPage;