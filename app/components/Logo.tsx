import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-center cursor-pointer">
      <div>
        <h1 className="text-lg font-bold text-gray-800">VOLTAERO</h1>
        <p className="text-xs text-gray-600 mt-1">Innovate, Elevate, Accelerate</p>
      </div>
    </Link>
  );
};

export default Logo;
