import React from 'react';
import styles from './HowItWork.module.css';
import locationImg from '../../imges/landing-page/location.png';
import calendarImg from '../../imges/landing-page/calender.png';

import carIcon from '../../imges/landing-page/car-icon.png';
import carBrand1 from '../../imges/landing-page/brands/Frame 28.svg';
import carBrand2 from '../../imges/landing-page/brands/Frame 25.svg';
import carBrand3 from '../../imges/landing-page/brands/Frame 27.svg';
import carBrand4 from '../../imges/landing-page/brands/Group.svg';
import carBrand5 from '../../imges/landing-page/brands/Volvo Cars svg.svg';
import carBrand6 from '../../imges/landing-page/brands/Group (1).svg';

export default function HowItWork() {
  return (
    <>
      <section id="howItWork" className="bg-white py-5 overflow-hidden px-2">
        <div>
          <h6
            className={`text-uppercase ${styles.title} m-auto rounded-1 px-4 mt-3  py-2 mb-4`}
          >
            how it work
          </h6>
          <p className={` fw-medium ${styles.titleP} text-center `}>
            Rent with following 3 working steps
          </p>
        </div>

        <div
          className={` mt-5 pt-2 container d-md-flex  m-auto flex-grow-0 justify-content-center`}
        >
          <div className={`${styles.step} m-auto m-md-0 text-center  px-4`}>
            <div className="img">
              <img src={locationImg} className="" alt="blue location icon" />
            </div>
            <div>
              <h6 className="fs-5 fw-medium mt-4 mb-3">Choose location</h6>
              <p className={`${styles.howItWorkP}`}>
                Choose your and find your best car
              </p>
            </div>
          </div>
          <div className={`${styles.step} m-auto m-md-0 text-center  px-4`}>
            <div className="img">
              <img src={calendarImg} className="" alt="blue calendar icon" />
            </div>
            <div>
              <h6 className="fs-5 fw-medium mt-4 mb-3">Pick-up date</h6>
              <p className={`${styles.howItWorkP}`}>
                Select your pick up date and time to book your car
              </p>
            </div>
          </div>
          <div className={`${styles.step} m-auto m-md-0 text-center  px-4`}>
            <div className="img">
              <img src={carIcon} className="" alt="blue car icon" />
            </div>
            <div>
              <h6 className="fs-5 fw-medium mt-4 mb-3">Book your car</h6>
              <p className={`${styles.howItWorkP}`}>
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-between  py-5">
          <img src={carBrand6} className={`${styles.brand} `} alt="" />
          <img src={carBrand4} className={`${styles.brand}`} alt="" />
          <img src={carBrand2} className={`${styles.brand}`} alt="" />
          <img src={carBrand5} className={`${styles.brand}`} alt="" />
          <img src={carBrand3} className={`${styles.brand}`} alt="" />
          <img src={carBrand1} className={`${styles.brand}`} alt="" />
        </div>
      </section>
    </>
  );
}
