import UserForm from "./UserForm";


function UserEditPage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h2>Edit User</h2>
      </nav>
      <hr />

      <UserForm />
    </>
  );
}

export default UserEditPage;