"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");

  return (
    <footer
      className={`${
        dark ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } border-t mt-16`}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          {/* Logo + Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link href="/">
              <img
                src={dark ? "/images/logo/logo-white.png" : "/images/logo/logo-dark.png"}
                alt="Newsprk"
                className="h-10"
              />
            </Link>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-indigo-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center border rounded-lg overflow-hidden bg-white">
              <input
  type="email"
  placeholder="Your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="grow px-4 py-3 outline-none text-sm"
/>

              <button
                onClick={() => alert(`Subscribed with: ${email}`)}
                className="bg-indigo-600 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-700"
              >
                SIGN UP
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              We hate spam as much as you do.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">News Categories</h3>
          <ul className="space-y-2">
            {[
              "Politics",
              "Business",
              "Technology",
              "Science",
              "Health",
              "Sports",
              "Entertainment",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-indigo-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Living Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Living</h3>
          <ul className="space-y-2">
            {[
              "Crossword",
              "Food",
              "Automobiles",
              "Education",
              "Health",
              "Magazine",
              "Weddings",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-indigo-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opinion Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Opinion</h3>
          <ul className="space-y-2">
            {[
              "Today’s Opinion",
              "Op-Ed Contributing",
              "Contributing Writers",
              "Business News",
              "Collections",
              "Saturday Review",
              "Product Review",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-indigo-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newspark Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newspark Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-indigo-600 transition">
                📱 On your mobile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 transition">
                🎙️ On smart speakers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 transition">
                ✉️ Contact Newspark News
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`${
          dark ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"
        } text-center py-4 text-xs`}
      >
        © {new Date().getFullYear()} Newsprk. All rights reserved.
      </div>
    </footer>
  );
}
