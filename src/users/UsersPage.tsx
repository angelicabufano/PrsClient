import { Link } from "react-router-dom";
import UserList from "./UserList";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function UsersPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Users</h2>
        <Link to={"/users/create"} role="button1" className="btn btn-primary">
        <svg className="bi m-2" width="20" height="20" fill="currentColor">
                <use xlinkHref={`${bootstrapIcons}#plus`} />
              </svg>  Add User
        </Link>
      </nav>

<hr />
      <UserList />
    </>
  );
}

export default UsersPage;