import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "./Product";
import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: async () => {
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
        <div className="mb-3 w-25">
          <label htmlFor="code" className="form-label">
            Part Number
          </label>
          <input
            id="partNbr"
            {...register("partNbr", { required: "Part Number is required" })}
            className={`form-control ${errors.partNbr && "is-invalid"}`}
            placeholder="Enter short part number"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.partNbr?.message}</div>
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Product name is required" })}
            className={`form-control ${errors.name && "is-invalid"}`}
            placeholder="Enter product name"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>
      </div>
      <div className="row-2 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-100">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            {...register("price")}
            className={`form-control ${errors.price && "is-invalid"}`}
        
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.price?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
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
          <label htmlFor="photoPath" className="form-label">
            Photo Path
          </label>
          <input
            id="photoPath"
            {...register("photoPath", { required: "photoPath is required" })}
            className={`form-control ${errors.photoPath && "is-invalid"}`}
            placeholder="Enter photoPath"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.photoPath?.message}</div>
        </div><div className="mb-3 w-25">
          <label htmlFor="vendorId" className="form-label">
          vendorId
          </label>
          <input
            id="vendorId"
            {...register("vendorId", { required: "vendorId is required" })}
            className={`form-control ${errors.vendorId && "is-invalid"}`}
            placeholder="Enter vendorId"
            type="text"
          />
          <div className="invalid-feedback">{errors?.vendorId?.message}</div>
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
            Save product
          </button>
        </div>
      </div>
    </form>
  );
}
