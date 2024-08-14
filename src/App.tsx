import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <header className="container-fluid justify-content-start d-flex bg-body-secondary py-4 px-5 border-bottom border-1">
          <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            />
          </svg>
          <span className="p-2">Purchase Request System</span>
        </header>
        <main className="container-fluid d-flex ps-0">
          <div className="bg-body-secondary vh-100 pe-5 ps-3 py-3">
            <div className="btn-group dropend">
              <button
                type="button"
                className="btn dropdown text-primary"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <svg className="bi" width={32} height={32} fill="currentColor">
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
                    <svg className="bi me-2" width={32} height={32} fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#cart" />
                    </svg>
                    Requests
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    <svg className="bi me-2" width={32} height={32} fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#grid" />
                    </svg>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="vendor.html">
                    <svg className="bi me-2" width={32} height={32} fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#building" />
                    </svg>
                    Vendors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="vendor-create.html">
                    <svg className="bi me-2" width={32} height={32} fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#people" />
                    </svg>
                    Users
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section className="container-fluid ps-5 p-2">
            <h2 className="container-fluid justify-content-between d-flex p-4">
              Vendors
              <a className="btn btn-primary" href="vendor-create.html">
                <svg className="bi" width={32} height={32} fill="currentColor">
                  <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus" />
                </svg>
                Create Vendor
              </a>
            </h2>
            <hr />
            <section className="bg-body-secondary d-flex flex-wrap">
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br />
                    Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br />
                    Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br />
                    Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
              <div className="card m-4" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Veum-Bayer</h5>
                  <h6>
                    <span className="badge text-bg-secondary">VEUM-BA</span>
                  </h6>
                  <p className="card-text">
                    96866 Union Ave. <br /> Fort Vinnieside, KY 10070 (144)-332-6938 <br />
                    support@VEUM-BA.com
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
