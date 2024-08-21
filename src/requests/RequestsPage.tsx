import { Link } from "react-router-dom";
import RequestTable from "./RequestTable";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function RequestsPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Requests</h2>
        <Link to={"/requests/create"} role="button1" className="btn btn-primary">
        <svg className="bi m-2" width="20" height="20" fill="currentColor">
                <use xlinkHref={`${bootstrapIcons}#plus`} />
              </svg>  Create a Request
        </Link>
      </nav>

<hr />
      <RequestTable />
    </>
  );
}

export default RequestsPage;