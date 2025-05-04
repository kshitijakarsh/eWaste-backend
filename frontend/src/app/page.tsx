"use client";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-full w-full flex items-center justify-center font-[bricolage]">
        <h1 className="text-center font-normal text-4xl text-black animate-blur-in">
          Hello, Welcome to{" "}
          <span className="text-6xl mb-6 text-center bg-gradient-to-r from-yellow-400 to-green-600 bg-clip-text text-transparent animate-font-grow">
            e-Waste
          </span>
        </h1>
      </div>
    </div>
  );
}
