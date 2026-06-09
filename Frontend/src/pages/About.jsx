import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(contentRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-[#021223] py-16 lg:py-24 overflow-hidden mt-[2vw]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1615456759361-45a6e6d6d197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-full rounded-md object-cover shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div ref={contentRef}>
            <h1 className="text-[#ECD787] text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              Magicalmost
            </h1>

            <h3 className="text-white text-xl md:text-2xl mt-2 mb-6">
              Award Winning Magician
            </h3>

            <div className="space-y-5 text-gray-300 leading-8 text-base md:text-lg">
              <p>
                For over two decades, Magicalmost has been creating worlds of
                wonder that transcend imagination. Blending timeless artistry
                with cutting-edge technology, he has performed for royal
                families across the UAE and Saudi Arabia.
              </p>

              <p>
                His talent was showcased on major television programs and
                international stages, captivating audiences with innovative
                illusions and unforgettable performances.
              </p>

              <p>
                In recognition of his groundbreaking contributions to the art
                of magic, Magicalmost received prestigious awards from leading
                organizations in the entertainment industry.
              </p>

              <p>
                What sets him apart is not only the scale of his illusions but
                the emotional connection he creates with every audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;