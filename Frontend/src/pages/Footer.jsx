import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#03111F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-center py-16">

          {/* Logo */}
          <img
            src="../public/logo.png"
            alt="Magicalmost"
            className="w-40 md:w-48 mb-8"
          />

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300 text-sm">

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D4AF37]" />
              <span>+971 56 827 7051</span>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-[#D4AF37]" />
              <span>info@magicalmost.com</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-8">

            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#D4AF37] transition"
            >
              <FaInstagram className="text-pink-500 text-lg" />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#D4AF37] transition"
            >
              <FaYoutube className="text-red-500 text-lg" />
            </a>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">

            <p>© 2024. All rights reserved</p>

            <p>
              Powered by -{" "}
              <span className="text-gray-400">
                magicalmost.com
              </span>
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;