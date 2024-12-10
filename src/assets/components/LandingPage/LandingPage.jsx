import React from 'react';
import Download from '../Download/Download';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import HowItWork from '../HowItWork/HowItWork';
import RentalDeals from '../RentalDeals/RentalDeals';
import Hero from '../Hero/Hero';
export default function LandingPage() {
  return (
    <>
      <Hero />
      <RentalDeals />
      <HowItWork />
      <WhyChooseUs />
      <Testimonials />
      <Download />
    </>
  );
}
