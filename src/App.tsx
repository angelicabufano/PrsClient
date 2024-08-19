import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NavPanel from "./NavPanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";
import VendorCreatePage from "./vendors/VendorCreatePage";
import VendorEditPage from "./vendors/VendorEditPage";
import UsersPage from "./users/UsersPage";
import UserCreatePage from "./users/UserCreatePage";
import UserEditPage from "./users/UserEditPage";
import ProductsPage from "./products/ProductsPage";
import ProductCreatePage from "./products/ProductCreatePage";
import ProductEditPage from "./products/ProductEditPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className="container-fluid d-flex ps-0">
          <NavPanel />

          <section className="container-fluid p-4 w-100">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/vendors/create" element={<VendorCreatePage />} />
              <Route path="/vendors/edit/:id" element={<VendorEditPage />} />
              <Route path="users" element={<UsersPage/>}/>
              <Route path="users/create" element={<UserCreatePage/>}/>
              <Route path="users/edit/:id" element={<UserEditPage/>}/>
              <Route path="/products" element={<ProductsPage/>}/>
              <Route path="/products/create" element={<ProductCreatePage/>}/>
              <Route path="/products/edit/:id" element={<ProductEditPage/>}/>
            </Routes>
          </section>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
