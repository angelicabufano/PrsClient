import { useEffect, useState } from "react";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import UserCard from "./UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

function UsersPage() {
  const [users, setUser] = useState<User[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadUsers() {
    try {
      setBusy(true);
      const data = await userAPI.list();
      setUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function remove(user: User) {
    if (confirm("Are you sure you want to delete this User?")) {
      if (user.id) {
        await userAPI.delete(user.id);
        let updatedUsers = users.filter((u) => u.id !== user.id);
        setUser(updatedUsers);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
   
   
      <section className="d-flex flex-wrap gap-4 list bg-secondary-subtle p-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onRemove={remove} />
        ))}
      </section>
    </>
  );
}

export default UsersPage;
