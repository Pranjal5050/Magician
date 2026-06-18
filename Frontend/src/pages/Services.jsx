import React from "react";

const services = [
  {
    title: "Signature Cello Floating Girl",
    image:
      "/img1.png",
    desc: `Magicalmost had the great honor of performing the breathtaking illusion "The Cello Floating Girl" before Tony Hassini, President of the International Magicians Society.

Created and designed exclusively by Magicalmost, this masterpiece blends music, magic, and elegance into one unforgettable performance. As the cello begins to play, a girl gracefully rises into the air floating in harmony with every note, leaving audiences spellbound by the mystery and beauty of the moment.`,
  },

  {
    title: "Laser Man Show",
    image:
      "/img2.png",
    desc: `An extraordinary fusion of light, technology and illusion. Our Laser Man Show creates unforgettable moments with futuristic visual effects, synchronized choreography and stunning performances perfect for luxury events and corporate productions.
    An extraordinary fusion of light, technology and illusion. Our Laser Man Show creates unforgettable moments with futuristic visual effects, synchronized choreography and stunning performances perfect for luxury events and corporate productions.`,
  },

  {
    title: "Magician & Mentalist",
    image:
      "/img3.png",
    desc: `Award-winning magical entertainment designed for elite weddings, luxury events and corporate experiences. Combining psychology, illusion and showmanship to leave audiences amazed.`,
  },

  {
    title: "Award Winning Magician",
    image:
      "/img4.png",
    desc: `With years of experience performing for prestigious clients across the UAE, our performances blend elegance, innovation and wonder. Every show is customized to create unforgettable memories for your guests.
    An extraordinary fusion of light, technology and illusion. Our Laser Man Show creates unforgettable moments with futuristic visual effects, synchronized choreography and stunning performances perfect for luxury events and corporate productions.`,
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
          <img src="../public/hero3.png" alt="" />
        </div>

      </div>
    </section>
  );
};

export default Services;