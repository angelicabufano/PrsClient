import { User } from "./User";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { SyntheticEvent } from "react";

interface UserCardProps {
  user: User;
  onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
  
  return (
    <div className="d-flex gap-4 " style={{ width: "25rem" }}>
      <div
        style={{ width: "6rem", height: "6rem" }}
        className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2">
        {user.firstname[0]}
        {user.lastname[0]}
      </div>

      <address>
        <strong>
          {user.firstname} {user.lastname}
        </strong>

        <br />
        <span className="text-secondary">{user.isAdmin ? "Admin" : user.isReviewer ? "Reviewer" : ""}</span>
        <br />
        <span className="text-secondary">{user.phone}</span>
        <br />
        <div className="d-flex justify-content-start"></div>
      </address>
      <Dropdown align="end">
        <Dropdown.Toggle variant="link" bsPrefix="p-0">
          &#x22EE; 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href={`/users/edit/${user.id}`}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={(event: SyntheticEvent) => {
              event.preventDefault();
              onRemove(user);
            }}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserCard;
