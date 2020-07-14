import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { Details } from "./components/Details"
// import { DetailsIndex } from "./components/DetailsIndex";
// import { ShoesDetails } from './components/ShoesDetails';
import { Cart } from './components/Cart';
import { GlobalProvider } from './context/GlobalState';
import { NotFound } from "./components/NotFound";
import ButtonAppBar from './components/Header';
import './index.css';
import { Button } from '@material-ui/core';
import Footer from './Footer';


function Shoe() {
  return (
    <React.Fragment>
    <Button href="https://shaikhenterprises.surge.sh/" >
      Home Page
    </Button>
    <ButtonAppBar />
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <div className='fixed-bottom'>
          <Footer></Footer>
      </div>
    </GlobalProvider>
  </React.Fragment>
  );
}

export default Shoe;
