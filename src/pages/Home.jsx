import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import About from '../sections/About';

import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';

import Process from '../sections/Process';
import Gallery from '../sections/Gallery';
import FAQ from '../sections/FAQ';

import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Contact />

      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
}
