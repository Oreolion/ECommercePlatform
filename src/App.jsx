// import { useState } from 'react';
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
