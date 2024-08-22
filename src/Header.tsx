import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "./users/UserContext";

function Header() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  function signout() {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/signin");
  }
  return (






    <div>
      <header className="container-fluid justify-content-between d-flex bg-body-secondary py-4 px-5 border-bottom border-1">
        <NavLink to="/" className={"nav-link"}>
          <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            />
          </svg>

        <span className="p-2">Purchase Request System</span>
        </NavLink>
        <details className="dropdown ">
          <summary className="btn btn-tertiary dropdown-toggle d-flex align-items-center">
            <span
              style={{ width: "3rem", height: "3rem" }}
              className="d-flex  bg-primary-subtle fs-5 text-secondary align-items-center justify-content-center rounded-circle me-2">
              {user?.firstname[0]}{user?.lastname[0]}
            </span>
            {user?.firstname} {user?.lastname}
          </summary>
          <div className="d-flex justify-content-end">
            <ul className="dropdown-menu bg-body-tertiary" style={{ display: "revert" }}>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <button className="dropdown-item" onClick={signout}>
                  Sign Out
                </button>
              </li>
            </ul>
            
          </div>
          
        </details>
        
      </header>
    </div>
  );
}

export default Header;
