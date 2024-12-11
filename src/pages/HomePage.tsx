import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/testimonials/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}