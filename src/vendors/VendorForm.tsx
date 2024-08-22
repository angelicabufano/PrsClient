import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Vendor } from "./Vendor";
import toast from "react-hot-toast";
import { vendorAPI } from "./VendorAPI";

export default function VendorForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const vendorId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vendor>({
    defaultValues: async () => {
      if (!vendorId) {
        return Promise.resolve(new Vendor());
      } else {
        return await vendorAPI.find(vendorId);
      }
    },
  });

  const save: SubmitHandler<Vendor> = async (vendor) => {
    try {
      if (vendor.isNew) {
        await vendorAPI.post(vendor);
        toast.success("Successfully saved.");
      } else {
        await vendorAPI.put(vendor);
        toast.success("Successfully saved.");
      }
      navigate("/vendors");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="d-flex flex-wrap w-75 gap-2 " onSubmit={handleSubmit(save)} noValidate>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-25">
          <label htmlFor="code" className="form-label">
            Vendor Code
          </label>
          <input
            id="code"
            {...register("code", { required: "Vendor code is required" })}
            className={`form-control ${errors.code && "is-invalid"}`}
            placeholder="Enter short vendor code"
            type="text"
            autoFocus
          />
          <div className="invalid-feedback">{errors?.code?.message}</div>
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="name" className="form-label">
            Vendor Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Vendor name is required" })}
            className={`form-control ${errors.name && "is-invalid"}`}
            placeholder="Enter vendor name"
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
            placeholder="Enter vendor's address"
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
          <Link className="btn btn-outline-primary me-2" to={"/vendors"}>
            Cancel
          </Link>
          <button className="btn btn-primary">
            <svg className="bi pe-none me-2" width={16} height={16} fill="#FFFFFF">
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save Vendor
          </button>
        </div>
      </div>
    </form>
  );
}
