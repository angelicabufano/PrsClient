import ProductForm from "./ProductForm";

function ProductEditPage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h2>Edit Product</h2>
      </nav>
      <hr />

      <ProductForm />
    </>
  );
}

export default ProductEditPage;