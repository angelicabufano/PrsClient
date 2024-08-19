import { Link } from "react-router-dom";
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
        
        <strong> {vendor.name} </strong>
        
        <small>
          <span className="badge text-bg-secondary">{vendor.code}</span>
          <div>{vendor.address}</div>
          <div>
            {vendor.city} {vendor.state}
          </div>
          {vendor.zip}
        </small>
        <small></small>
        <Dropdown align="end">
        <Dropdown.Toggle variant="link" bsPrefix="p-0">
          &#x22EE; 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href={`/vendors/edit/${vendor.id}`}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={(event: SyntheticEvent) => {
              event.preventDefault();
              onRemove(vendor);
            }}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        {/* <div className="d-flex gap-2">
          <Link className="small" to={`/vendors/edit/${vendor.id}`}>
            Edit
          </Link>
          |
          <a
            className="small"
            onClick={(event: SyntheticEvent) => {
              event.preventDefault();
              onRemove(vendor);
            }}>
            Delete
          </a>
        </div> */}
      </article>
    </div>
  );
}

export default VendorCard;
