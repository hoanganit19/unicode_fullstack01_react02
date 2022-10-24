import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import Error from './Pages/Error';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/gioi-thieu" element={<About />}/>
              <Route path="/san-pham" element={<Product />}/>
              <Route path="/san-pham/:id" element={<ProductDetail />}/>
              <Route path="*" element={<Error />}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
