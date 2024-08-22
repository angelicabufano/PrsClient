import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "./Product";
import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Vendor } from "../vendors/Vendor";
import { vendorAPI } from "../vendors/VendorAPI";
import { useState } from "react";

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [vendors, setVendor] = useState<Vendor[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: async () => {
      let vendorList = await vendorAPI.list();
      setVendor(vendorList);
      
      if (!productId) {
        return Promise.resolve(new Product());
      } else {
        return await productAPI.find(productId);
      }
    },
  });

  const save: SubmitHandler<Product> = async (product) => {
    try {
      if (product.isNew) {
        await productAPI.post(product);
      } else {
        await productAPI.put(product);
      }
      navigate("/products");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)} noValidate>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="col-md-3">
          <label htmlFor="code" className="form-label">
            Product Number
          </label>
          <input
            id="partNbr"
            {...register("partNbr", { required: "Number is required" })}
            className={`form-control ${errors.partNbr && "is-invalid"}`}
            placeholder="Enter product number"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.partNbr?.message}</div>
        </div>

        <div className="col-md-8">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`form-control ${errors.name && "is-invalid"}`}
            placeholder="Enter product name"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>
      </div>
      <div className="d-flex flex-row w-100 gap-4">
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            {...register("price", { required: "Price is required" })}
            placeholder="Enter product's price"
            className={`form-control ${errors.price && "is-invalid"}`}
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.price?.message}</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="unit" className="form-label">
            Unit
          </label>
          <input
            id="unit"
            {...register("unit", { required: "Unit is required" })}
            className={`form-control ${errors.unit && "is-invalid"}`}
            placeholder="Enter unit"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.unit?.message}</div>
        </div>
        <div className="row-3 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-50">
          <label htmlFor="form-label">Vendor</label>
          <select
            {...register("vendorId", { required: "Vendor is Required" })}
            className={`form-select ${errors.vendorId && "is-invalid"}`}>
              <option value="">Select...</option>
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}

            </select>
            <div className="invalid-feedback">{errors?.vendor?.message}</div>
          </div>
        </div>
      </div>
     
      <div className="row-3 d-flex flex-row justify-content-end w-100 gap-4">
        <div className="d-flex justify-content-end mt-4">
          <Link className="btn btn-outline-primary me-2" to={"/products"}>
            Cancel
          </Link>
          <button className="btn btn-primary">
            <svg className="bi pe-none me-2" width={16} height={16} fill="#FFFFFF">
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save Product
          </button>
        </div>
      </div>
    </form>
  );
}
