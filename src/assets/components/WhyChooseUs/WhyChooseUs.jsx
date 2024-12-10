import React from 'react';
import styles from './WhyChooseUs.module.css';
import carImg from '../../imges/landing-page/sec-5/Audi 1.png';
import moneyImg from '../../imges/landing-page/sec-5/money.png';
import chatImg from '../../imges/landing-page/sec-5/chat.png';
import userImg from '../../imges/landing-page/sec-5/user.png';
import messageImg from '../../imges/landing-page/sec-5/message.png';

export default function WhyChooseUs() {
  return (
    <>
      <section
        id="WhyChooseUs"
        className={`py-5 ${styles.WhyChooseUsSec} py-5 overflow-hidden`}
      >
        <div className="sec-wrapper row mb-3">
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
            <p className={` fw-medium ${styles.titleP} `}>
              We offer the best experience with our rental deals
            </p>
            <div className="features me-5 mt-4 pt-3">
              <div className="d-flex gap-3 mb-2">
                <div className="img-wrapper pt-2">
                  <img
                    src={moneyImg}
                    alt="A blue icon featuring a prominent dollar sign, symbolizing finance or currency.
"
                  />
                </div>
                <div>
                  <h6 className="fs-5 fw-medium">Best price guaranteed</h6>
                  <p className={`${styles.featureP}`}>
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-2">
                <div className="img-wrapper pt-2">
                  <img
                    src={userImg}
                    alt="blue user icon
"
                  />
                </div>
                <div>
                  <h6 className="fs-5 fw-medium">Experience driver</h6>
                  <p className={`${styles.featureP}`}>
                    Don’t have driver? Don’t worry, we have many experienced
                    driver for you.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-2">
                <div className="img-wrapper pt-2">
                  <img
                    src={messageImg}
                    alt="A blue icon
"
                  />
                </div>
                <div>
                  <h6 className="fs-5 fw-medium">24 hour car delivery</h6>
                  <p className={`${styles.featureP}`}>
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-2">
                <div className="img-wrapper pt-2">
                  <img
                    src={chatImg}
                    alt="A blue icon chat icon.
"
                  />
                </div>
                <div>
                  <h6 className="fs-5 fw-medium">24/7 technical support</h6>
                  <p className={`${styles.featureP}`}>
                    Have a question? Contact Rentcars support any time when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
