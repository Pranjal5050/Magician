// import React from "react";

// const services = [
//   {
//     title: "Signature Cello Floating Girl",
//     image:
//       "https://framerusercontent.com/images/sXdtu4HNFs9Qs11Ac2Esnr7e2jY.jpg?width=580&height=411",
//     desc: `Magicalmost had the great honor of performing the breathtaking illusion "The Cello Floating Girl" before Tony Hassini, President of the International Magicians Society.

// Created and designed exclusively by Magicalmost, this masterpiece blends music, magic, and elegance into one unforgettable performance. As the cello begins to play, a girl gracefully rises into the air floating in harmony with every note, leaving audiences spellbound by the mystery and beauty of the moment.`,
//   },

//   {
//     title: "Laser Man Show",
//     image:
//       "https://media.istockphoto.com/id/1007193976/photo/magician-doing-trick-with-doves.webp?a=1&b=1&s=612x612&w=0&k=20&c=vMRK9WCwGcfxn9LR3JDuZqAPygDQaBuigSMdinbFTMg=",
//     desc: `An extraordinary fusion of light, technology and illusion. Our Laser Man Show creates unforgettable moments with futuristic visual effects, synchronized choreography and stunning performances perfect for luxury events and corporate productions.`,
//   },

//   {
//     title: "Magician & Mentalist",
//     image:
//       "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e?w=1200&auto=format&fit=crop&q=80",
//     desc: `Award-winning magical entertainment designed for elite weddings, luxury events and corporate experiences. Combining psychology, illusion and showmanship to leave audiences amazed.`,
//   },

//   {
//     title: "Award Winning Magician",
//     image:
//       "https://images.unsplash.com/photo-1618590067592-a867d8b44403?w=1200&auto=format&fit=crop&q=80",
//     desc: `With years of experience performing for prestigious clients across the UAE, our performances blend elegance, innovation and wonder. Every show is customized to create unforgettable memories for your guests.`,
//   },
// ];

// const Services = () => {
//   return (
//     <section className="relative w-full overflow-hidden py-16 md:py-24">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/cloud.mp4"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-[#03111fe8]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-red-600 ">

//         {/* Heading */}
//         <div className="text-center mb-16 md:mb-20">
//           <h1 className="heading-font text-[#ECD787] text-3xl sm:text-4xl md:text-5xl font-semibold">
//             Magical Performances
//           </h1>

//           <div className="flex justify-center mt-4">
//             <div className="w-32 h-[2px] bg-[#ECD787]"></div>
//           </div>

//           <p className="text-gray-300 max-w-xl mx-auto mt-5 text-sm md:text-base leading-7">
//             Discover world-class magical entertainment designed for luxury
//             weddings, corporate events and unforgettable celebrations.
//           </p>
//         </div>

//         {/* Services */}
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 ${
//               index % 2 !== 0
//                 ? "lg:[&>*:first-child]:order-2"
//                 : ""
//             }`}
//           >
//             {/* Image */}
//             <div className="px-1 sm:px-2">
//               <div className="overflow-hidden rounded-2xl border border-[#ECD78720] shadow-xl">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover"
//                 />
//               </div>
//             </div>

//             {/* Text */}
//             <div className="max-w-[550px] px-1 sm:px-2">
//               <h2 className="text-[#ECD787] text-2xl md:text-3xl font-semibold leading-tight">
//                 {service.title}
//               </h2>

//               <div className="w-14 h-[2px] bg-[#ECD787] mt-3 mb-5"></div>

//               <p className="text-gray-300 text-[15px] md:text-[17px] leading-8">
//                 {service.desc}
//               </p>
//             </div>
//           </div>
//         ))}

//         {/* Bottom Video */}
//         <div className="mt-12 md:mt-16">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full rounded-2xl border border-[#ECD78720]"
//             src="/magic.mp4"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";

const services = [
  {
    title: "Signature Cello Floating Girl",
    image:
      "https://media.istockphoto.com/id/912003020/photo/magician-or-illusionist-is-showing-magic-trick-blue-stage-light-in-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=8wtOhy_2Cj61I4CmxoKiY1ukbW8ZVAcDA-aRap8MgiQ=",
    desc: `Magicalmost had the great honor of performing the breathtaking illusion "The Cello Floating Girl" before Tony Hassini, President of the International Magicians Society.

Created and designed exclusively by Magicalmost, this masterpiece blends music, magic, and elegance into one unforgettable performance. As the cello begins to play, a girl gracefully rises into the air floating in harmony with every note, leaving audiences spellbound by the mystery and beauty of the moment.`,
  },

  {
    title: "Laser Man Show",
    image:
      "https://media.istockphoto.com/id/1007193976/photo/magician-doing-trick-with-doves.webp?a=1&b=1&s=612x612&w=0&k=20&c=vMRK9WCwGcfxn9LR3JDuZqAPygDQaBuigSMdinbFTMg=",
    desc: `An extraordinary fusion of light, technology and illusion. Our Laser Man Show creates unforgettable moments with futuristic visual effects, synchronized choreography and stunning performances perfect for luxury events and corporate productions.`,
  },

  {
    title: "Magician & Mentalist",
    image:
      "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e?w=1200&auto=format&fit=crop&q=80",
    desc: `Award-winning magical entertainment designed for elite weddings, luxury events and corporate experiences. Combining psychology, illusion and showmanship to leave audiences amazed.`,
  },

  {
    title: "Award Winning Magician",
    image:
      "https://images.unsplash.com/photo-1618590067592-a867d8b44403?w=1200&auto=format&fit=crop&q=80",
    desc: `With years of experience performing for prestigious clients across the UAE, our performances blend elegance, innovation and wonder. Every show is customized to create unforgettable memories for your guests.`,
  },
];

const Services = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24" id="services">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/cloud.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#03111fee]" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <div>
          {/* Heading */}
          <div className="text-center mb-20">

            <h1 className="heading-font text-[#ECD787] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              Magical Performances
            </h1>

            <div className="flex justify-center mt-5">
              <div className="w-full h-[2px] bg-[#ECD787]"></div>
            </div>
          </div>

        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-24 ${index % 2 !== 0
                ? "lg:[&>*:first-child]:order-2"
                : ""
              }`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-[#ECD78720] shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-[#ECD787] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                {service.title}
              </h2>

              <div className="w-20 h-[2px] bg-[#ECD787] mt-4 mb-6"></div>

              <p className="text-gray-300 text-[15px] md:text-[18px] leading-8 max-w-[650px]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom Video */}
        <div className="mt-16">
          <video
            autoPlay
            muted
            playsInline
            className="w-full mb-10 rounded-3xl border border-[#ECD78720] shadow-xl"
            src="/magic.mp4"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;