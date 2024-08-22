import { RequestLine } from "./RequestLine";
import { Request } from "../requests/Request";
import { Link } from "react-router-dom";
import { SyntheticEvent } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface RequestLineInterface {
  request: Request;
  onRemove: (requestLine: RequestLine) => void;
}

function RequestLineTable({ request, onRemove }: RequestLineInterface) {
  return (
    <>
      <div className="border rounded-2 p-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="table">
            <h4>Items</h4>
          </label>
          <Link className=" btn btn-primary" to={`/requests/detail/${request.id}/requestLines/create`}>
            + New Request Line
          </Link>
        </div>
        <table className="table " id="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {request.requestLine?.map((requestLine) => (
              <tr key={requestLine.id}>
                <td>{requestLine.product?.name}</td>
                <td>{requestLine.product?.price}</td>
                <td>{requestLine.quantity}</td>
                <td>${(parseFloat(requestLine.product?.price ?? '0') * (requestLine.quantity ?? 0))}</td>
                <td>
                  <Link to={`/requests/detail/:id/requestLines/edit/${requestLine.id}`}>
                    <svg className="bi m-2" width="15" height="15" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#pencil`} />
                    </svg>
                  </Link>

                  <a
                    className=""
                    onClick={(event: SyntheticEvent) => {
                      event.preventDefault();
                      onRemove(requestLine);
                    }}>
                    <svg className="bi m-2" width="15" height="15" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#trash`} />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>${request.total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default RequestLineTable;