import { useState } from 'react';
import Search from '../Search';
import Cars from '../Cars';
import styles from './RentalDeals.module.css';
import arrow from '../../imges/landing-page/arrow-right.svg';
import { Link } from 'react-router-dom';
export default function RentalDeals() {
  const [search, setSearch] = useState('');

  return (
    <>
      <section id="rentalDeals" className="container d-flex flex-column py-5  ">
        <div className="px-0 px-lg-5 d-flex justify-content-center ">
          <Search search={search} onSearchChange={setSearch} />
        </div>
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
        <div className={` my-2 container-fluid`}>
          <Cars search={search} visibleCount={4} />
        </div>
        <button
          className={`${styles.allBtn} px-4 py-2 rounded-3 bg-transparent align-self-center mt-4`}
        >
          <Link to="/cars">
            show all vehicles <img src={arrow} alt="" />
          </Link>
        </button>
      </section>
    </>
  );
}
