"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          Biz Trade News
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/categories" className="hover:text-indigo-600">Categories</Link>
          <Link href="/videos" className="hover:text-indigo-600">Videos</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>

        <button className="md:hidden text-gray-700 text-xl">☰</button>
      </div>
    </header>
  );
}
