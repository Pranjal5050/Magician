import React, { useState } from "react";
import axios from "axios";

const BookingSection = () => {
  const [fullname, setFullname] = useState("");
  const [email, Setemail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [eventlocation, setEventlocation] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandaler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking",
        {
          fullname,
          email,
          phonenumber,
          eventdate,
          eventlocation,
          message,
        }
      );

      alert("Booking Submitted Successfully");

      setFullname("");
      Setemail("");
      setPhonenumber("");
      setEventdate("");
      setEventlocation("");
      setMessage("");

    } catch (error) {
      console.log("error", error);
      alert("Something went wrong");
    }
  };
  return (
    <section className="w-full bg-[#07101f] py-16 px-4" id="booking">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 bg-[#091426] border border-white/10 rounded-2xl p-6 md:p-10">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#D4AF37] mb-4">
              Book Magicalmost
            </h2>

            <h3 className="text-xl text-white mb-8">
              Dubai's Premier Illusionist
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Looking to elevate your next event?
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              Magicalmost offers world-class magic and illusion shows for:
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Corporate events & gala dinners</li>
              <li>• Luxury weddings & private celebrations</li>
              <li>• Festivals & international stages</li>
            </ul>

            <p className="text-gray-300 leading-8 mt-8">
              With over 18 years of experience performing across the UAE and
              worldwide, Magicalmost guarantees a unique blend of astonishment,
              elegance, and unforgettable entertainment.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-[#0d1628] rounded-2xl p-6 border border-white/10">
            <p className="text-gray-300 mb-8 leading-7">
              Don't miss the chance to transform your event with the magic of
              Magicalmost. Contact us now to bring a touch of enchantment to
              your next celebration.
            </p>

            <form onSubmit={onSubmitHandaler} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => Setemail(e.target.value)}
                    placeholder="Type your email"
                    className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="Type your number"
                  className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Event Date:
                  </label>
                  <input
                    type="date"
                    value={eventdate}
                    onChange={(e) => setEventdate(e.target.value)}
                    className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Event Location:
                  </label>
                  <input
                    type="text"
                    value={eventlocation}
                    onChange={(e) => setEventlocation(e.target.value)}
                    placeholder="Type event location"
                    className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Message:
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your vision"
                  className="w-full bg-[#141d2e] border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                SEND
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;