import React from 'react';
import errorImg from '../../imges/not-found/404-not-found.png';
export default function NotFound() {
  return (
    <>
      <section className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div>
          <img src={errorImg} className="" alt="" />
        </div>
      </section>
    </>
  );
}
