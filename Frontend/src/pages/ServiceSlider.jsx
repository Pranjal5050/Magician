import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const slides = [
  {
    image:
      "/slider1.png",
    title: "Stage Performance",
  },
  {
    image:
      "/slider2.png",
    title: "Mentalist Show",
  },
  {
    image:
      "/slider3.png",
    title: "Close Up Magic",
  },
  {
    image:
      "/slider4.png",
    title: "Award Winning",
  },
  {
    image:
      "/slider5.png",
    title: "Corporate Events",
  },
];

const ServiceSlider = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/cloud.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#021223]/80 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-[#E6C36A] text-4xl md:text-6xl font-bold leading-tight mb-16">
          Signature Services For
          <br />
          Elite Events
        </h2>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          navigation
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1.15}
          spaceBetween={0}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.4,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          className="service-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[550px]"
            >
              <div className="group">

                <div className="overflow-hidden rounded-2xl border border-[#E6C36A33]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[420px] md:h-[560px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-center text-white tracking-[4px] uppercase mt-5 text-lg">
                  {slide.title}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .service-slider {
          padding-bottom: 70px;
        }

        .service-slider .swiper-slide {
          opacity: 0.4;
          transform: scale(0.75);
          transition: all .5s ease;
        }

        .service-slider .swiper-slide-prev,
        .service-slider .swiper-slide-next {
          opacity: .7;
          transform: scale(.85);
        }

        .service-slider .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 9999px;
          border: 1px solid #E6C36A;
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default ServiceSlider;