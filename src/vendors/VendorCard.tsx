import { Link } from "react-router-dom";
import { Vendor } from "./Vendor";
import { SyntheticEvent } from "react";

interface VendorCardProps {
  vendor: Vendor;
  onRemove: (vendor: Vendor) => void;
}

function VendorCard({ vendor, onRemove }: VendorCardProps) {
  return (
    <article className="card p-4" key={vendor.id}>
      <Link to={`/vendor/detail/${vendor.id}`}>
        <strong> {vendor.name}</strong>
      </Link>
      <small>
        Address: {vendor.address} ({vendor.city}) ({vendor.state}) ({vendor.zip})
      </small>
      <small></small>
      <div className="d-flex gap-2">
        <Link className="small" to={`/vendor/edit/${vendor.id}`}>
          edit
        </Link>
        |
        <a
          className="small"
          onClick={(event: SyntheticEvent) => {
            event.preventDefault();
            onRemove(vendor);
          }}
        >
          delete
        </a>
      </div>
    </article>
  );
}

export default VendorCard;