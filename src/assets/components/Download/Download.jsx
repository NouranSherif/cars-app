import React from 'react';
import styles from './Download.module.css';
import googlePlay from '../../imges/landing-page/andriod.png';
import appStore from '../../imges/landing-page/ios.png';
import appImg from '../../imges/landing-page/sec-7/iPhone-14.png';
export default function Download() {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <>
      <section className={` ${styles.downloadSec} `}>
        <div className="container row p-0 m-auto justify-content-between g-5 pt-1">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
            <h2 className={`${styles.downloadH2} px-2 px-md-0`}>
              Download Rentcars App for{' '}
              <span className="text-uppercase text-primary">free</span>
            </h2>
            <p className={`${styles.downloadP} mt-3`}>
              For faster, easier booking and exclusive deals
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
            <div className="my-5 w-75">
              <form
                action=""
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                <div className="name">
                  <label htmlFor="name"></label>
                  <input
                    id="name"
                    className={`${styles.input} w-100`}
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="phone-number">
                  <label htmlFor="phoneNumber"></label>
                  <input
                    id="phoneNumber"
                    className={`${styles.input} w-100`}
                    type="tel"
                    maxLength="11"
                    placeholder="phoneNumber"
                  />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input
                    id="email"
                    className={`${styles.input} w-100`}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <button
                  className={`btn btn-primary ${styles.formBtn} text-capitalize align-self-center `}
                >
                  send
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-5 pt-5  ">
            <img
              className="w-100 h-100 "
              src={appImg}
              alt="Image of a Jaguar XE displayed on a car rental app interface, showcasing sleek design and modern features.
"
            />
          </div>
        </div>
      </section>
    </>
  );
}
