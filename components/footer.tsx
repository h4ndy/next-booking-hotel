import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-grey-900">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image src="/logo.png" width={128} height={40} alt="logo" />
            </Link>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>

          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/room">Rooms</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contatcs Us</Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-sm bg-white text-black"
                />
              </div>
              <button className="bg-orange-400 font-bold text-white p-3 w-full text-center rounded-md hover:bg-orange-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="maz-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
        &copy; Copyright 2025 | Koding Lagi | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
