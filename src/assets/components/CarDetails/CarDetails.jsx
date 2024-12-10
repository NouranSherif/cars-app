import React from 'react';
import user from '../../imges/card/user.png';
import frame from '../../imges/card/Frame.png';
import door from '../../imges/card/doors.png';
import snow from '../../imges/card/d8wxke_2_.png';
import styles from '../WhyChooseUs/WhyChooseUs.module.css';
import carImg from '../../imges/landing-page/sec-5/Audi 1.png';

export default function CarDetails() {
  return (
    <>
      {' '}
      <section
        id="WhyChooseUs"
        className={` mt-5 ${styles.WhyChooseUsSec} py-5 overflow-hidden`}
      >
        <div className="sec-wrapper row mb-3 py-5">
          <div className="col-12 col-md-6 align-self-center">
            <img
              src={carImg}
              className="w-100"
              alt="A sleek white Audi R8 is prominently displayed, showcasing its elegant design and sporty features."
            />
          </div>
          <div className="col-12 col-md-6 px-5 ">
            <div>
              <h6
                className={`text-uppercase ${styles.title} rounded-1 px-4 mt-3  py-2 mb-4`}
              >
                why choose us
              </h6>
            </div>
            <p className={` fw-medium ${styles.titleP} mb-4 `}>
              We offer the best experience with our rental deals
            </p>

            <div className="row mb-3">
              <div className="col-12 d-flex gap-2  text-secondary">
                <div className="Img-wrapper ">
                  <img src={user} className="pb-2" alt="user icon" />
                </div>
                <p className={`${styles.smallFont}  `}>4 Passengers</p>
              </div>
              <div className="col-12 d-flex gap-2 text-secondary ">
                <div className="Img-wrapper ">
                  <img src={frame} className="pb-2" alt="icon" />
                </div>
                <p className={`${styles.smallFont} `}>Auto</p>
              </div>
              <div className="col-12 d-flex gap-2 text-secondary ">
                <div className="Img-wrapper ">
                  <img src={snow} className="pb-2" alt="icon" />
                </div>
                <p className={`${styles.smallFont} `}>Air Conditioning</p>
              </div>
              <div className="col-12 d-flex gap-2 text-secondary ">
                <div className="Img-wrapper ">
                  <img src={door} className="pb-2" alt="icon" />
                </div>
                <p className={`${styles.smallFont} `}>4 Doors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
