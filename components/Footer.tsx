import React from "react";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-8 px-28 py-6 lg:py-8 md:grid-cols-3">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Contact
              </h2>
              <div className="text-gray-500 font-medium space-y-4">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-gray-700" />
                  <a
                    href="mailto:voltaerotech@gmail.com"
                    className="hover:underline text-sm"
                  >
                    voltaerotech@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-gray-700" />
                  <a
                    href="tel:+918848653573"
                    className="hover:underline text-sm"
                  >
                    +91 88486 53573
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm">
                    D/O No 2, Rice Mill Compound,
                    <br />
                    Kongareddypalli, Chittoor, AP - 517001
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Navigation
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/showcase" className="hover:underline">
                    Showcase
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/experiments" className="hover:underline">
                    Technology
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-28 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025 Voltaero Technologies. All Rights Reserved.
            </span>
            <span>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:underline"
              >
                Privacy Policy
              </Link>
              {" | "}
              <Link
                href="/terms-and-conditions"
                className="text-sm text-gray-500 hover:underline"
              >
                Terms & Conditions
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
