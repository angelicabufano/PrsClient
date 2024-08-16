
import { User } from "./User";


interface UserCardProps {
  user: User;
  onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
    return (
      <div className="d-flex gap-4 " style={{ width: "25rem" }}>
        <div
          style={{ width: "6rem", height: "6rem" }}
          className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2"
        >
          firstnameinitial
          lastnameinitial
        </div>
        <address>
          <strong>
            {user.firstName} {user.lastName}
           {/* dropdown here */}
          </strong>
          <br />
          <span className="text-secondary">
              Admin 
          </span>
          <br />
          <span className="text-secondary">{user.phone}</span>
          <br />
          <div className="d-flex justify-content-start"></div>
        </address>
      </div>
    );
  }
  
  export default UserCard;