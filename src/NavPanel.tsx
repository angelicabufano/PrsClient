import { NavLink } from "react-router-dom";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function NavPanel() {
  return (
    <>
      <nav className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary border-end min-vh-100 position-sticky">
       
        <nav style={{ width: "15rem" }}>
          <ul className="nav flex-column nav nav-pills p-3 ">
            <li className="pb-2">Purchase</li>
            <li className="nav-item">
            <NavLink to="/requests" className={"nav-link"}>
                <svg className="bi me-2" width={16} height={16} fill="currentColor">
                  <use xlinkHref={`${bootstrapIcons}#cart`} />
                </svg>
                Requests
              </NavLink>
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
