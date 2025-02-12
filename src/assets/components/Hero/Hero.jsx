import React from 'react';
import styles from './Hero.module.css';
import googlePlay from '../../imges/landing-page/andriod.png';
import appStore from '../../imges/landing-page/ios.png';
import car from '../../imges/landing-page/carb.png';

export default function Hero() {
  return (
    <>
      <section className={`${styles.hero} py-5   `}>
        <div className="row   ms-3 pt-5 gap-5 gap-md-0 mt-sm-5  justify-content-between ">
          <div className="me-5 px-5 col-12 col-md-5  ">
            <h1 className={`${styles.title} `}>
              Find, book and <br /> rent a car{' '}
              <span className="text-primary">Easily</span>
            </h1>
            <p className="pe-5">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 ">
              <a href="">
                {' '}
                <img src={googlePlay} alt=" Google Play logo" />
              </a>
              <a href="">
                {' '}
                <img src={appStore} alt="app store logo" />
              </a>
            </div>
          </div>

          <div className={`${styles.car} p-0 col-12 col-md-6 `}>
            <img src={car} className="w-100" alt="a blue car" />
          </div>
        </div>
      </section>
    </>
  );
}
