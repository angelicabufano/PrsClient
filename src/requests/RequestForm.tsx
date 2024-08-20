import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";
import { useState } from "react";
import { User } from "../users/User";
import { userAPI } from "../users/UserAPI";

function RequestForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [users, setUser] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      let userList = await userAPI.list();
      setUser(userList);

      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });

  const save: SubmitHandler<Request> = async (request) => {
    try {
      let savedRequest;
      if (request.isNew) {
        savedRequest = await requestAPI.post(request);
        navigate(`/request/detail/${savedRequest.id}`);
      } else {
        savedRequest = await requestAPI.put(request);
        navigate(`/request/detail/${requestId}`);
      }
      console.log(savedRequest);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
          <div className="col-md-5">
            <label htmlFor="vc" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="vc"
              {...register("description", {
                required: "Request Description is Required",
              })}
              className={`form-control ${errors.description && "is-invalid"} `}
              placeholder="Enter a brief description for your purchase request"
            />
            <div className="invalid-feedback ">{errors?.description?.message}</div>
          </div>

          <div className="col-4">
            <label htmlFor="form-label">Delivery Method</label>
            <select
              className={`form-select ${errors.deliveryMode && "is-invalid"}`}
              {...register("deliveryMode", { required: "State is required" })}>
              <option value="">Select...</option>
              <option value="AL">Pickup</option>
              <option value="AK">Delivery</option>
              <option value="AZ">Signature Delivery</option>
            </select>
            <div className="invalid-feedback">{errors?.deliveryMode?.message}</div>
          </div>

          <div className="col-md-5">
            <label htmlFor="justification" className="form-label">
              Justification
            </label>
            <input
              type="text"
              id="justification"
              {...register("justification", { required: "Justification is required" })}
              placeholder="Enter a justification for your purchase request"
              className={`form-control ${errors.justification && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.justification?.message}</div>
          </div>

          <div className="col-4">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: "Status Required" })}
              defaultValue="NEW"
              disabled
              className={`form-select ${errors.status && "is-invalid"}`}>
              <option value="NEW">NEW</option>
              <option value="REVIEW">REVIEW</option>
              <option value="APPROVED">APPROVED</option>
              <option value="REJECTED">REJECTED</option>
            </select>
            <div className="invalid-feedback">{errors?.status?.message}</div>
          </div>
          <div className="col-4">
            <label htmlFor="user" className="form-label">
              Requested By
            </label>
            <select
              id="user"
              {...register("userId", { required: "Requested by is Required" })}
              defaultValue=""
              disabled
              className={`form-select ${errors.userId && "is-invalid"}`}>
              <option value=""></option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstname} {user.lastname}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors?.userId?.message}</div>
          </div>

          <div className="offset-7">
            <NavLink to="/request" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </NavLink>
            <button className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
