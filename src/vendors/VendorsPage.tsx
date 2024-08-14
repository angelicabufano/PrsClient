import { Link } from "react-router-dom";

function VendorsPage() {
  return (
    <>
      <header className="d-flex justify-content-between p-4 mb-4 border-bottom border-2">
        <h2>Vendors</h2>
        <Link to="/vendors/create" className="btn btn-primary">
        Add Vendor
       </Link>

      </header>

      <section className="d-flex bg-light gap-5 p-4 "> 

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
    </>
  );
}

export default VendorsPage;
