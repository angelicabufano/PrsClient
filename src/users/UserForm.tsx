import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function UserForm() {
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
        toast.success("Successfully saved.");
      } else {
        await userAPI.put(user);
        toast.success("Successfully saved.");
      }
      navigate("/users");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
        <div className="col-5">
            <label className="form-label" htmlFor="firstname">
              First Name
            </label>
            <input
              id="firstname"
              {...register("firstname", {
                required: "First name is required",
              })}
              className={`form-control ${errors.firstname && "is-invalid"}`}
              type="text"
              placeholder="Enter first name"
            />
            <div className="invalid-feedback">{errors?.firstname?.message}</div>
          </div>
          <div className="col-5">
            <label className="form-label" htmlFor="lastname">
              Last Name
            </label>
            <input
              id="lastname"
              {...register("lastname", { required: "Last name is required" })}
              className={`form-control ${errors.lastname && "is-invalid"}`}
              type="text"
              placeholder="Enter last name"
            />
            <div className="invalid-feedback">{errors?.lastname?.message}</div>
          </div>
          <div className="col-md-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              className="form-control"
              placeholder="Enter email address"
              id="email"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              {...register("phone")}
              className="form-control"
              placeholder="Enter phone number"
              id="phone"
            />
          </div>
          <div className="col-md-5">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              {...register("username", {
                required: "Username is required",
              })}
              className={`form-control ${errors.username && "is-invalid"} `}
              type="text"
              placeholder="Enter username"
            />
            <div className="invalid-feedback ">{errors?.username?.message}</div>
          </div>
          <div className="col-md-5">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`form-control ${errors.password && "is-invalid"}`}
              type="password"
              placeholder="Enter password"
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
        

   
 
          <div className="mb-3 w-50">
            <label className="form-label">Role</label>
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" {...register("isReviewer")}/>

              <label className="form-check-label">Reviewer</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" {...register("isAdmin")}/>
              <label className="form-check-label">Admin</label>
            </div>
          </div>
          <div className="row-3 d-flex flex-row justify-content-end w-100 gap-4">
            <div className="d-flex justify-content-end mt-4">
              <Link className="btn btn-outline-primary me-2" to={"/users"}>
                Cancel
              </Link>
              <button className="btn btn-primary form-check">
                <svg className="bi pe-none me-2" width={16} height={16} fill="#FFFFFF">
                  <use xlinkHref={`${bootstrapIcons}#save`} />
                </svg>
                Save User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
