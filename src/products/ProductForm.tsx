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
            Product Code
          </label>
          <input
            id="code"
            {...register("code", { required: "Product code is required" })}
            className={`form-control ${errors.code && "is-invalid"}`}
            placeholder="Enter short product code"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.code?.message}</div>
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
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            {...register("address", { required: "Address is required" })}
            className={`form-control ${errors.address && "is-invalid"}`}
            placeholder="Enter product's address"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.address?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
            className={`form-control ${errors.city && "is-invalid"}`}
            placeholder="Enter city"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.city?.message}</div>
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="form-label">State</label>
          <select
            className={`form-select ${errors.state && "is-invalid"}`}
            {...register("state", { required: "State is required" })}>
            <option value="">Select state...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <div className="invalid-feedback">{errors?.state?.message}</div>
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            id="zip"
            {...register("zip", { required: "Zip code is required" })}
            className={`form-control ${errors.zip && "is-invalid"}`}
            placeholder="Enter zip code"
            type="text"
          />
          <div className="invalid-feedback">{errors?.zip?.message}</div>
        </div>
      </div>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            className="form-control"
            placeholder="Enter phone number"
            type="text"
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            className="form-control"
            placeholder="Enter email address"
            type="email"
          />
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
