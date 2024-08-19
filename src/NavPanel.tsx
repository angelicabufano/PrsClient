import { NavLink } from "react-router-dom";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function NavPanel() {
  return (
    <>
      <nav className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky">
        <div className="btn-group dropend">
          <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="text-primary fw-semibold">
              <svg className="bi m-2" width="32" height="32" fill="currentColor">
                <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
              </svg>
              Create New
            </span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/vendors" className="dropdown-item">
                Create Vendor
              </NavLink>
            </li>
            <li>
            <NavLink to="/products" className="dropdown-item">
                Create Products
              </NavLink>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Create Request
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Create User
              </a>
            </li>
          </ul>
        </div>
        <nav style={{ width: "15rem" }}>
          <ul className="nav flex-column nav nav-pills p-3 ">
            <li className="pb-2">Purchase</li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="request.html">
                <svg className="bi me-2" width={16} height={16} fill="currentColor">
                  <use xlinkHref={`${bootstrapIcons}#cart`} />
                </svg>
                Requests
              </a>
            </li>
            <NavLink to="/products" className={"nav-link"}>
                <svg className="bi me-2" width={16} height={16} fill="currentColor">
                  <use xlinkHref={`${bootstrapIcons}#grid`} />
                </svg>
                Products
              </NavLink>
          
            <li>
              <NavLink to="/vendors" className={"nav-link"}>
                <svg className="bi me-2" width={16} height={16} fill="currentColor">
                  <use xlinkHref={`${bootstrapIcons}#building`} />
                </svg>
                Vendors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className={"nav-link"}>
                <svg className="bi me-2" width={16} height={16} fill="currentColor">
                  <use xlinkHref={`${bootstrapIcons}#people`} />
                </svg>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
export default NavPanel;
