import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";



export default function VendorForm() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const userId = Number(id);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<User>({
      defaultValues: async () => {
        if (!userId) {
          return Promise.resolve(new User());
        } else {
          return await userAPI.find(userId);
        }
      },
    });
  
    const save: SubmitHandler<User> = async (user) => {
      try {
        if (user.isNew) {
          await userAPI.post(user);
        } else {
          await userAPI.put(user);
        }
        navigate("/users");
      } catch (error: any) {
        toast.error(error.message);
      }
    };
  
    return (
      <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)} noValidate>
        <div className="row-1 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-25">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              {...register("username", { required: "Username is required" })}
              className={`form-control ${errors.username && "is-invalid"}`}
              placeholder="Enter Username"
              type="text"
              autoFocus
            />
            <div className="invalid-feedback">{errors?.username?.message}</div>
          </div>
  
          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label">
             Password
            </label>
            <input
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`form-control ${errors.password && "is-invalid"}`}
              placeholder="Enter Password"
              type="text"
              autoFocus
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
        </div>
        <div className="row-2 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-100">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className={`form-control ${errors.firstName && "is-invalid"}`}
              placeholder="Enter First Name"
              type="text"
              autoFocus
            />
            <div className="invalid-feedback">{errors?.firstName?.message}</div>
          </div>
        </div>
        <div className="row-3 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-50">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              className={`form-control ${errors.lastName && "is-invalid"}`}
              placeholder="Enter Last Name"
              type="text"
              autoFocus
            />
            <div className="invalid-feedback">{errors?.lastName?.message}</div>
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
              Save vendor
            </button>
          </div>
        </div>
      </form>
    );
  }