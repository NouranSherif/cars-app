import React from 'react';
import styles from './Footer.module.css';
import logo from '../../imges/footer/logo-footer.png';
import locationIicon from '../../imges/footer/location.png';
import phoneIicon from '../../imges/footer/call.png';
import facebookIcon from '../../imges/footer/facebook.png';
import instaIcon from '../../imges/footer/instagram.png';
import youtubeIcon from '../../imges/footer/youtube.png';

export default function Footer() {
  return (
    <>
      <section className={`${styles.footer} text-white py-5 `}>
        <div
          className={`container d-flex px-5 px-sm-3  gap-3 flex-wrap  pb-5 ${styles.borderBottom}`}
        >
          <div className="col-12 col-sm-4 col-md-3  flex-grow-1">
            <img src={logo} alt="logo" />
            <address className={`mt-3 mt-sm-4 ${styles.fsSmall}`}>
              <div className="d-flex gap-1 align-items-center">
                <div className="img-wrapper pt-1 ">
                  <img src={locationIicon} className="" alt="location icon" />
                </div>

                <p className="m-0">25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
              </div>
              <div className="d-flex gap-1 mt-3 align-items-center">
                <div className="img-wrapper ">
                  <img src={phoneIicon} className="me-1" alt="location icon" />
                </div>

                <a href="tel" className="text-decoration-none text-white ">
                  +603 4784 273 12
                </a>
              </div>
              <div className="d-flex gap-1 mt-3 align-items-center">
                <div className="img-wrapper ">
                  <img
                    src={locationIicon}
                    className="me-1"
                    alt="location icon"
                  />
                </div>

                <a
                  href="mailto:rentcars@gmail.com"
                  className="text-decoration-none text-white "
                >
                  rentcars@gmail.com
                </a>
              </div>
            </address>
          </div>
          <div className="col-12 col-sm-4 col-md-2 flex-grow-1">
            <h6>Our Products</h6>
            <ul className={`list-unstyled mt-3 mt-sm-4 ${styles.fsSmall}`}>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  career
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  car
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  packages
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  features
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  priceline
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 col-md-2 flex-grow-1">
            <h6>Resources</h6>
            <ul className={`list-unstyled mt-3 mt-sm-4 ${styles.fsSmall}`}>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Help Centre
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Partner Network
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Cruises
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 col-md-2 flex-grow-1">
            <h6>About Rentcars</h6>
            <ul className={`list-unstyled mt-3 mt-sm-4 ${styles.fsSmall}`}>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Why choose us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Press Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-white text-capitalize"
                >
                  Advertise
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 col-md-2 flex-grow-1">
            <h6>Follow Us</h6>
            <div className="mt-3 mt-sm-4 d-flex gap-2">
              {' '}
              <a href="">
                {' '}
                <img src={facebookIcon} alt="facebook icon" />
              </a>
              <a href="">
                {' '}
                <img src={instaIcon} alt="instagram icon" />
              </a>
              <a href="">
                <img src={youtubeIcon} alt="youtube icon" />
              </a>
            </div>
          </div>
        </div>
        <div className={`container p-3 text-white ${styles.fsSmall}`}>
          <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </section>
    </>
  );
}
