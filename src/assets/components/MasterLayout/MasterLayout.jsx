import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
// import LandingPage from '../LandingPage/LandingPage';
// import CarsPage from '../CarsPage/CarsPage';
// import CarDetails from '../CarDetails/CarDetails';
import { Outlet } from 'react-router-dom';
export default function MasterLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
