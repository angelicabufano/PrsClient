import { Link } from "react-router-dom";
import UserList from "./UserList";

function UsersPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>User</h2>
        <Link to={"/users/create"} role="button1" className="btn btn-primary p-2">
          + Add User
        </Link>
      </nav>

<hr />
      <UserList />
    </>
  );
}

export default UsersPage;