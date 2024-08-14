import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { NavLink } from "react-router-dom";

function NavPanel() {
    return (
    <nav className="bg-body-secondary vh-100 pe-5 ps-3 py-3">
    <div className="btn-group dropend">
      <button type="button" className="btn dropdown text-primary" data-bs-toggle="dropdown" aria-expanded="false">
        <svg className="bi" width={16} height={16} fill="currentColor">
          <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus-circle-fill" />
        </svg>
        Create New
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="product.html">
            Product
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="vendor-create.html">
            Vendor
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="user.html">
            User
          </a>
        </li>
      </ul>
    </div>
    <nav style={{ width: "15rem" }}>
      <ul className="nav flex-column nav nav-pills p-3">
        <li className="pb-2">Purchase</li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="request.html">
            <svg className="bi me-2" width={16} height={16} fill="currentColor">
              <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#cart" />
            </svg>
            Requests
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="product.html">
            <svg className="bi me-2" width={16} height={16} fill="currentColor">
              <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#grid" />
            </svg>
            Products
          </a>
        </li>
        <li>
          <NavLink to= "/vendors" className={"nav-link"}>
            <svg className="bi me-2" width={16} height={16} fill="currentColor">
              <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#building" />
            </svg>
            Vendors
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="vendor-create.html">
            <svg className="bi me-2" width={16} height={16} fill="currentColor">
              <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#people" />
            </svg>
            Users
          </a>
        </li>
      </ul>
    </nav>
  </nav>
);
}
export default NavPanel;