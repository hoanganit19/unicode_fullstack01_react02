import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Error from "./Pages/Error";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Dashboard from "./Pages/Admin/Dashboard";

import ProductAdmin from "./Pages/Admin/Product";
import ProductAdd from "./Pages/Admin/ProductAdd";
import ProductEdit from "./Pages/Admin/ProductEdit";

import Login from "./Pages/Login";

function App() {
  const ProtectedRoute = () => {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gioi-thieu" element={<About />} />
              <Route path="/san-pham" element={<Product />} />
              <Route path="/san-pham/:id" element={<ProductDetail />} />
              <Route path="*" element={<Error />} />

              <Route path="/admin" element={<ProtectedRoute />}>
                <Route path="" element={<Dashboard />} />

                <Route path="products">
                  <Route path="" element={<ProductAdmin />} />
                  <Route path="add" element={<ProductAdd />} />
                  <Route path="edit/:id" element={<ProductEdit />} />
                </Route>
              </Route>

              <Route path="/login" element={<Login />}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
/admin
/admin/products
/admin/products/add
/admin/products/edit/:id
/admin/products/delete/:id
*/
