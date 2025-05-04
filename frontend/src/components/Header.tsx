"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full shadow-md fixed top-0 z-50 font-[bricolage] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-800">
          EcoTech
        </Link>
        <nav>
          <ul className="flex space-x-6 text-black font-semibold">
            <li>
              <Link href="/" className="hover:text-green-600 transition">
                home
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-green-600 transition">
                sign up
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-green-600 transition">
                login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
