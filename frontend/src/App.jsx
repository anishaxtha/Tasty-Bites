import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
