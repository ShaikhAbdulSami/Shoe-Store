import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from './components/Cart';
import { GlobalProvider } from './context/GlobalState';
import { NotFound } from "./components/NotFound";
import ButtonAppBar from './components/Header';
import './index.css';


function Shoe() {
  return (
    <React.Fragment>
    <ButtonAppBar />
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </GlobalProvider>
  </React.Fragment>
  );
}

export default Shoe;
