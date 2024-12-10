import React from 'react';
import styles from './Cars.module.css';
import Cars from '../Cars';

export default function CarsPage() {
  return (
    <>
      <section className="container py-5 my-5">
        <div className="text-center">
          <h6
            className={`text-uppercase ${styles.title} rounded-1 px-4 my-3 m-auto  py-2 `}
          >
            POPULAR RENTAL DEALS
          </h6>
          <p className={` fw-medium ${styles.titleP} `}>
            Most popular cars rental deals
          </p>
        </div>
        <Cars visibleCount={12} />
      </section>
    </>
  );
}
