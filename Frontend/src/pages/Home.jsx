import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
import About from "./About";
import ServiceSlider from "./ServiceSlider";
import BookingSection from "./BookingSection";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const secondImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      secondImageRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "none",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="bg-[#080707] w-full overflow-x-hidden relative" id="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-wrapper relative h-screen overflow-hidden">

        {/* First Image */}
        <img
          src="https://framerusercontent.com/images/ghrFDyH9JqJJ5DSVZE3N6tfo7G4.jpg?width=1440&height=812"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Second Image */}
        <div
          ref={secondImageRef}
          className="absolute inset-0 z-10"
        >
          <img
            src="https://framerusercontent.com/images/bhI0I3NScpYgODRj6qpFWQC6rHk.png?width=1440&height=823"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="relative z-20 bg-black">
        <Services />
      </section>

      <section className="relative z-20 bg-black">
        <About />
      </section>
      <ServiceSlider />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Home;
