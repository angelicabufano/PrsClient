import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NavPanel from "./NavPanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className="container-fluid d-flex ps-0">
          <NavPanel />

          <section className="container-fluid">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
            </Routes>
          </section>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
