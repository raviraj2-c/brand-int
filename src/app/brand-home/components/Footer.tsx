import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 uppercase text-xs text-gray-900">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Placeholder</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase text-xs text-gray-900">Discover</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Instagram influencers</a></li>
            <li><a href="#" className="hover:underline">Facebook influencers</a></li>
            <li><a href="#" className="hover:underline">YouTube influencers</a></li>
            <li><a href="#" className="hover:underline">X influencers</a></li>
            <li><a href="#" className="hover:underline">TikTok influencers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase text-xs text-gray-900">Stratix</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Placeholder</a></li>
            <li><a href="#" className="hover:underline">Placeholder</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase text-xs text-gray-900">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Frequently asked questions</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t text-xs text-gray-600 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-center flex-wrap gap-4">
            <span>© Stratix Inc.</span>
            <a href="#" className="hover:underline">Terms and Services</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Placeholder</a>
            <a href="#" className="hover:underline">Placeholder</a>
          </div>
          <div className="flex space-x-4 text-gray-600">
            <FaInstagram className="w-4 h-4 hover:text-[#E1306C]" />
            <FaFacebookF className="w-4 h-4 hover:text-[#1877F2]" />
            <FaTiktok className="w-4 h-4 hover:text-black" />
            <SiX className="w-4 h-4 hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
