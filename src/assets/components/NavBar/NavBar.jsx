import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../imges/nav/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg container py-4 position-absolute start-0 end-0 top-0 bg-white z-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse  navbar-collapse ${styles.navbarCollapse}   z-3 p-3  `}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2 ms-auto ">
              <li className="nav-item">
                <a className={`nav-link active `} aria-current="page" href="#">
                  Become a renter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rentalDeals">
                  Rental deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#howItWork">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#WhyChooseUs">
                  Why choose us
                </a>
              </li>
            </ul>
            <div className={`d-flex gap-2 ms-auto`}>
              <button className={`btn border-0 bg-transparent`}>Sign in</button>

              <button className={`btn  bg-primary text-white`}>Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
