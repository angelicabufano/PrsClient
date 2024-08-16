import { Link } from "react-router-dom";
import VendorList from "./VendorList";

function VendorsPage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4">
        <h2>Vendors</h2>
        <Link to={"/vendors/create"} role="button1" className="btn btn-primary p-2">
          + Add Vendor
        </Link>
      </nav>

<hr />
      <VendorList />
    </>
  );
}

export default VendorsPage;
