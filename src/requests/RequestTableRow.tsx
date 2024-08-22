
import { Request } from "./Request";
import { SyntheticEvent } from "react";
import { Dropdown } from "react-bootstrap";

interface RequestTableRowProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestTableRow({ request, onRemove }: RequestTableRowProps) {
  return (
    <tr>
      <td>{request.id}</td>
      <td>
     {request.description}
      </td>
      <td>
      <td className="m-2 badge text-bg-primary">{request.status}</td>
      </td>
      <td>${request.total}</td>
      <td>{request.user?.firstname} {request.user?.lastname}</td>
      <td>
        <div className="d-flex justify-content-end">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <svg className=" m-2 text-primary" width={18} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/requests/detail/${request.id}`}>Review</Dropdown.Item>
              <Dropdown.Item href={`/requests/edit/${request.id}`}>Edit</Dropdown.Item>
              <Dropdown.Item
                onClick={(event: SyntheticEvent) => {
                  event.preventDefault();
                  onRemove(request);
                }}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}

export default RequestTableRow;
