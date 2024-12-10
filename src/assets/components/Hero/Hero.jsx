import React from 'react';
import styles from './Hero.module.css';
import googlePlay from '../../imges/landing-page/andriod.png';
import appStore from '../../imges/landing-page/ios.png';
import car from '../../imges/landing-page/carb.png';

export default function Hero() {
  return (
    <>
      <section className={`${styles.hero} py-5  `}>
        <div className="d-flex gap-5 ms-3 py-5 my-5">
          <div className="mx-5 px-5 w-50">
            <h1 className={`${styles.title} pe-5`}>
              Find, book and <br /> rent a car{' '}
              <span className="text-primary">Easily</span>
            </h1>
            <p className="pe-5">
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 pe-5 ">
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
          <div className={`${styles.car} ms-5`}>
            <img src={car} className="w-100" alt="a blue car" />
          </div>
        </div>
      </section>
    </>
  );
}
