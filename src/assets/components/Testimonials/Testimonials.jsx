import React from 'react';
import styles from './Testimonials.module.css';
import img1 from '../../imges/landing-page/sec-6/Rectangle 8 (1).png';
import img2 from '../../imges/landing-page/sec-6/d6a3241f6301e4fffc82bc0d436aa21d.jpg';
import star from '../../imges/landing-page/sec-6/Star 1.png';
export default function Testimonials() {
  return (
    <>
      <section className={`py-5 ${styles.testimonials}`}>
        <h6
          className={`text-uppercase ${styles.title} rounded-1 px-4 m-auto mt-4 py-2`}
        >
          testimonials
        </h6>
        <p
          className={`text-center fs-2 fw-medium ${styles.testimonialsP} mt-2`}
        >
          What peole say about us?
        </p>
        <div className="wrapper overflow-hidden py-5">
          <div className="row  justify-content-center px-5 px-md-0  gap-4">
            <div
              className={`${styles.testimonialCard} col-12  col-md-5 rounded-4 shadow p-0 d-flex bg-white`}
            >
              <div className="img-wrapper w-50">
                <img
                  src={img1}
                  className="w-100 h-100"
                  alt="A man smiles joyfully while standing amidst a field of tall, swaying grass under a clear blue sky."
                />
              </div>

              <div className="px-2 px-sm-3 px-xl-5 py-3 w-50 d-flex flex-column justify-content-center gap-4">
                <div>
                  <p className={`${styles.rate} m-0`}>
                    5.0<span className="fs-4 ms-2">stars</span>
                  </p>
                  <div className="d-flex gap-1">
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                  </div>
                </div>
                <p>
                  “I feel very secure when using caretall's services. Your
                  customer care team is very enthusiastic and the driver is
                  always on time.”
                </p>
                <div>
                  <p className={`${styles.testimonialsName} mb-1`}>
                    Charlie Johnson
                  </p>
                  <p className={`${styles.place}`}>From New York, US</p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.testimonialCard} col-12  col-md-5 rounded-4 shadow p-0 d-flex bg-white`}
            >
              <div className="img-wrapper w-50">
                <img
                  src={img2}
                  className="w-100 h-100 rounded-start-4 "
                  alt="A man smiles joyfully while standing amidst a field of tall, swaying grass under a clear blue sky."
                />
              </div>

              <div className="px-2 px-sm-3 px-xl-5 py-3 w-50 d-flex flex-column justify-content-center gap-4">
                <div>
                  <p className={`${styles.rate} m-0`}>
                    5.0<span className="fs-4 ms-2">stars</span>
                  </p>
                  <div className="d-flex gap-1">
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                    <img src={star} alt="yellow star" />
                  </div>
                </div>
                <p>
                  “I feel very secure when using caretall's services. Your
                  customer care team is very enthusiastic and the driver is
                  always on time.”
                </p>
                <div>
                  <p className={`${styles.testimonialsName} mb-1`}>
                    Charlie Johnson
                  </p>
                  <p className={`${styles.place}`}>From New York, US</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
