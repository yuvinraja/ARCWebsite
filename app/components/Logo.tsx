import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
<Link href="/" className="flex items-center gap-3">
      <div className="relative w-10 h-10 flex-shrink-0">
        {/* Replace with your actual logo path */}
        <Image
          src="/logo.png" // Update with your logo path
          alt="Voltaero Technologies Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg leading-tight">
          Voltaero Technologies
        </span>
        <span className="text-purple-100 text-xs font-medium leading-tight">
          Innovating autonomous solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;
