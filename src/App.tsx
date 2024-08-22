import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NavPanel from "./NavPanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendorsPage from "./vendors/VendorsPage";
import VendorCreatePage from "./vendors/VendorCreatePage";
import VendorEditPage from "./vendors/VendorEditPage";
import UsersPage from "./users/UsersPage";
import UserCreatePage from "./users/UserCreatePage";
import UserEditPage from "./users/UserEditPage";
import ProductsPage from "./products/ProductsPage";
import ProductCreatePage from "./products/ProductCreatePage";
import ProductEditPage from "./products/ProductEditPage";
import RequestsPage from "./requests/RequestsPage";
import RequestCreatePage from "./requests/RequestCreatePage";
import RequestEditPage from "./requests/RequestEditPage";
import RequestDetails from "./requests/RequestDetails";
import RequestLineCreatePage from "./requestLines/RequestLineCreatePage";
import RequestLineEditPage from "./requestLines/RequestLineEditPage";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./users/UserContext";
import { useState } from "react";
import { User } from "./users/User";
import SignInPage from "./account/SignInPage";
import IndexPage from "./IndexPage";

function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
}
function App() {
  const [user, setUser] = useState<User | undefined>(getPersistedUser());

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <main className="container-fluid d-flex ps-0">
          <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "#0d6efd",
                  secondary: "white",
                },
              },
              style: {
                maxWidth: 500,
              },
            }}
          />
          <NavPanel />

          <section className="container-fluid p-4 w-100">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/vendors/create" element={<VendorCreatePage />} />
              <Route path="/vendors/edit/:id" element={<VendorEditPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="users/create" element={<UserCreatePage />} />
              <Route path="users/edit/:id" element={<UserEditPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/create" element={<ProductCreatePage />} />
              <Route path="/products/edit/:id" element={<ProductEditPage />} />
              <Route path="/requests" element={<RequestsPage />} />
              <Route path="/requests/create" element={<RequestCreatePage />} />
              <Route path="/requests/edit/:id" element={<RequestEditPage />} />
              <Route path="/requests/detail/:id" element={<RequestDetails />} />
              <Route path="/requests/detail/:id/requestLines/create" element={<RequestLineCreatePage />} />
              <Route path="/requests/detail/:id/requestLines/edit/:lineId" element={<RequestLineEditPage />} />
              <Route path="signin" element={<SignInPage />} />
            </Routes>
          </section>
        </main>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
