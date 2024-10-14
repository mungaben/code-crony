import React from "react";
import Logo from "./Logo";

const Topnav = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-400 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div>
          <Logo />
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex space-x-6 text-white font-semibold">
          <div>lorem2</div>
          <div>lorem3</div>
          <div>lorem4</div>
          <div>lorem5</div>
        </div>

        {/* Right Section - Call to Action */}
        <div className="text-white font-bold">
          Try free trial
        </div>
      </div>
    </div>
  );
};

export default Topnav;
