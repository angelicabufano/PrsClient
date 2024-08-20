import { Vendor } from "./Vendor";
import { SyntheticEvent } from "react";
import { Dropdown } from "react-bootstrap";

interface VendorCardProps {
  vendor: Vendor;
  onRemove: (vendor: Vendor) => void;
}

function VendorCard({ vendor, onRemove }: VendorCardProps) {
  return (
    <div>
      <article className="card p-4" style={{ width: "18rem" }} key={vendor.id}>
        <div className="d-flex justify-content-between">
          <div className="">
            <strong className="card-title"> {vendor.name} </strong>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={`/vendors/edit/${vendor.id}`}>Edit</Dropdown.Item>
              <Dropdown.Item
                onClick={(event: SyntheticEvent) => {
                  event.preventDefault();
                  onRemove(vendor);
                }}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="badge text-bg-secondary" style={{ width: "5rem" }}>
          {vendor.code}
        </div>
        <small>
          <div>{vendor.address}</div>
          <div>
            {vendor.city} {vendor.state}
          </div>
          {vendor.zip}
        </small>
      </article>
    </div>
  );
}

export default VendorCard;
