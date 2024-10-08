import { useEffect, useState } from "react";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

function ProductsPage() {
  const [products, setProduct] = useState<Product[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadProducts() {
    try {
      setBusy(true);
      const data = await productAPI.list();
      setProduct(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function remove(product: Product) {
    if (confirm("Are you sure you want to delete this Product?")) {
      if (product.id) {
        await productAPI.delete(product.id);
        let updatedProducts = products.filter((p) => p.id !== product.id);
        setProduct(updatedProducts);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
   
   
      <section className="d-flex flex-wrap gap-4 list bg-secondary-subtle p-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={remove} />
        ))}
      </section>
    </>
  );
}

export default ProductsPage;
