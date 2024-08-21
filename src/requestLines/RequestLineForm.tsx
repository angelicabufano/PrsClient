import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RequestLine } from "./RequestLine";
import toast from "react-hot-toast";
import { requestLineAPI } from "./RequestLineAPI";
import { useState } from "react";
import { Product } from "../products/Product";
import { productAPI } from "../products/ProductAPI";


function RequestLineForm() {
  const navigate = useNavigate();

  let { id: requestIdAsString, lineId: lineIdAsString } = useParams<{ id: string, lineId:string }>();
  let requestLineId = Number(lineIdAsString);
  let requestId = Number(requestIdAsString);
  const [products, setProducts] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLine>({
    defaultValues: async () => {
      let productsData = await productAPI.list();
      setProducts(productsData);

        if (!requestLineId) {
      let newRequestLine = new RequestLine({ requestId: requestId });
      return Promise.resolve(newRequestLine);
       }
      else {
         return await requestLineAPI.find(requestLineId);
          
        }
    },
  });

  const save: SubmitHandler<RequestLine> = async (requestLine: RequestLine) => {
    try {
      if (requestLine.isNew) {
        await requestLineAPI.post(requestLine);
      } else {
        await requestLineAPI.put(requestLine);
      }
  
      navigate(`/requests/detail/${requestId}`)
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="product">
          Name
        </label>
        <select
          {...register("productId", {
            required: "Product is required",
          })}
          className={`form-select ${errors.productId && "is-invalid"} `}
          id="product">
          <option value="">Select...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors?.productId?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="role">
          Quantity
        </label>
        <input
          {...register("quantity", {
            required: "quantity is required",
          })}
          className="form-control"
          type="text"
          id="quantity"
        />
      <div className="invalid-feedback">{errors?.quantity?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={`/request/detail/${requestId}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default RequestLineForm;