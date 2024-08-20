import { Link } from "react-router-dom";
import VendorList from "./VendorList";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function VendorsPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Vendors</h2>
        <Link to={"/vendors/create"} role="button1" className="btn btn-primary">
        <svg className="bi m-2" width="20" height="20" fill="currentColor">
                <use xlinkHref={`${bootstrapIcons}#plus`} />
              </svg>  Create a Vendor
        </Link>
      </nav>

<hr />
      <VendorList />
    </>
  );
}

export default VendorsPage;
