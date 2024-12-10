import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CarsPage/Cars.module.css';
import carImg1 from '../imges/card/car1.png';
import carImg2 from '../imges/card/car2.png';
import carImg3 from '../imges/card/car3.png';
import carImg4 from '../imges/card/image4.png';

import star from '../imges/card/star.png';
import user from '../imges/card/user.png';
import frame from '../imges/card/Frame.png';
import door from '../imges/card/doors.png';
import snow from '../imges/card/d8wxke_2_.png';
import rightArrow from '../imges/card/arrow-right.png';
import axios from 'axios';
export default function Cars({ search, visibleCount }) {
  const [cars, setCars] = useState([]);
  const images = [carImg1, carImg2, carImg3, carImg4];

  const getCars = async () => {
    try {
      const res = await axios.get('https://myfakeapi.com/api/cars/');
      const first100Cars = await res.data.cars.slice(0, visibleCount);
      setCars(first100Cars);
      console.log(cars);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    getCars();
  }, []);

  const visibleCars = search
    ? cars.filter(car => car.car.toLowerCase().includes(search.toLowerCase()))
    : cars;

  return (
    <>
      <div className="row ">
        {visibleCars.map((car, index) => (
          <div
            className="px-2 py-4 col-12 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            {' '}
            <div className="  shadow rounded-4 py-2 px-3">
              <div className={`${styles.imgWrapper} p-3`}>
                <img
                  src={images[index % images.length]} // Ensure we loop through the images array
                  alt={`${car.car} ${car.car_model}`}
                  className="w-100 h-100"
                />
              </div>
              <div className="info">
                <h6 className="fw-medium">
                  {car.car} <span>{car.car_model}</span>
                </h6>
                <div className="rate d-flex gap-2 ">
                  <div className="rateImg ">
                    <img src={star} className="pb-1" alt="star" />
                  </div>

                  <p className={`${styles.smallFont}fw-semibold  `}>
                    4.5 <span className="text-secondary ">(2.036 reviews)</span>
                  </p>
                </div>
                <div className="row mb-3">
                  <div className="col-6 d-flex gap-2  text-secondary">
                    <div className="Img-wrapper ">
                      <img src={user} className="pb-2" alt="user icon" />
                    </div>
                    <p className={`${styles.smallFont}  `}>4 Passengers</p>
                  </div>
                  <div className="col-6 d-flex gap-2 text-secondary ">
                    <div className="Img-wrapper ">
                      <img src={frame} className="pb-2" alt="icon" />
                    </div>
                    <p className={`${styles.smallFont} `}>Auto</p>
                  </div>
                  <div className="col-6 d-flex gap-2 text-secondary ">
                    <div className="Img-wrapper ">
                      <img src={snow} className="pb-2" alt="icon" />
                    </div>
                    <p className={`${styles.smallFont} `}>Air Conditioning</p>
                  </div>
                  <div className="col-6 d-flex gap-2 text-secondary ">
                    <div className="Img-wrapper ">
                      <img src={door} className="pb-2" alt="icon" />
                    </div>
                    <p className={`${styles.smallFont} `}>4 Doors</p>
                  </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center py-3 border-top">
                  <p className={`${styles.priceP}`}>Price</p>
                  <p className="fw-medium">
                    {car.price}
                    <span className={`${styles.priceP} fw-normal `}>/ day</span>
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary text-capitalize  px-5">
                    <Link
                      to="/details"
                      className="text-decoration-none text-white"
                    >
                      {' '}
                      rent now <img src={rightArrow} alt="right arrow" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
