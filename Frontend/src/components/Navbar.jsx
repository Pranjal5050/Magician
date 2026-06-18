import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080808c0] backdrop-blur-md border-b border-zinc-700 md:p-8">
      <div className="max-w-7xl mx-auto px-4 w-full md:w-1/2">

        <div className="h-20 flex items-center justify-between">

          {/* Left Desktop */}
          <div className="hidden md:flex items-center gap-10 text-white font-bold text-2xl">
            <a href="#home" className="font-bold transition hover:text-[#f2d253]">
              Home
            </a>

            <a href="#about" className="hover:text-[#f2d253] transition">
              About
            </a>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              className="h-20 md:h-50 object-cover"
              src="../public/logo.png"
              alt="logo"
            />
          </div>

          {/* Right Desktop */}
          <div className="hidden md:flex items-center gap-10 text-white font-bold text-2xl">
            <a href="#services" className="hover:text-[#f2d253] transition">
              Services
            </a>

            <a href="#booking" className="hover:text-[#f2d253] transition">
              Booking
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-4 text-white font-semibold text-center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#booking">Booking</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
