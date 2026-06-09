// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
//     title: "Close Up Magic",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=800",
//     title: "Mentalist Show",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
//     title: "Award Winning",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
//     title: "Stage Performance",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
//     title: "Corporate Event",
//   },
// ];

// const ServiceSlider = () => {
//   return (
//     <section className="bg-[#021223] py-20 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-5">

//         {/* Heading */}
//         <h2 className="text-center text-[#E6C36A] text-3xl md:text-5xl font-bold mb-16">
//           Signature Services For
//           <br />
//           Elite Events
//         </h2>

//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 250,
//             modifier: 2,
//             scale: 0.85,
//             slideShadows: false,
//           }}
//           navigation
//           modules={[EffectCoverflow, Navigation, Autoplay]}
//           className="serviceSwiper"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               className="!w-[250px] md:!w-[320px] lg:!w-[380px]"
//             >
//               <div className="group">

//                 <div className="overflow-hidden rounded-xl border border-[#E6C36A44]">
//                   <img
//                     src={slide.image}
//                     alt=""
//                     className="w-full h-[380px] md:h-[580px] object-cover transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <h3 className="text-center text-white text-lg mt-5 tracking-[4px] uppercase">
//                   {slide.title}
//                 </h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>

//       <style jsx>{`
//         .serviceSwiper {
//           padding-bottom: 80px;
//         }

//         .swiper-slide-active {
//           transform: scale(1.1);
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #e6c36a;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const slides = [
  {
    image:
      "https://framerusercontent.com/images/p7yb6iyO1LXnx3fWgfvQ8OEYYIk.png?scale-down-to=1024&width=1488&height=1952",
    title: "Stage Performance",
  },
  {
    image:
      "https://framerusercontent.com/images/KewWmE19wAubzRaYYa4mZcC1U.png?scale-down-to=1024&width=1488&height=1952",
    title: "Mentalist Show",
  },
  {
    image:
      "https://framerusercontent.com/images/SEDuRiqcxYjmDna6eMUKJeFUY.png?scale-down-to=1024&width=1488&height=1952",
    title: "Close Up Magic",
  },
  {
    image:
      "https://framerusercontent.com/images/bUYE81otnCaw9GmRsHlG4ZwomU.png?scale-down-to=1024&width=1488&height=1952",
    title: "Award Winning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000",
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