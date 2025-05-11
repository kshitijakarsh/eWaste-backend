"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function DeletedSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    localStorage.removeItem("token");
    
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        router.push("/login");
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, router]);

  const goToLogin = () => {
    router.push("/login");
  };

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 p-6 w-full max-w-7xl">
          <div className="bg-white border-solid border-4 border-green-800 text-black rounded-2xl p-8 shadow-xl mx-auto w-full max-w-3xl">
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 rounded-full p-5">
                <svg 
                  className="w-16 h-16 text-green-800" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
              Account Successfully Deleted
            </h1>
            
            <div className="flex justify-center">
              <hr className="w-3/4 border-t border-green-800 my-2" />
            </div>
            
            <div className="text-center mt-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Your admin account has been permanently deleted from our system.
              </p>
              <p className="text-lg text-gray-700">
                Thank you for your contributions to our eco-friendly initiative.
              </p>
              
              <div className="mt-8 mb-4 bg-gray-100 rounded-lg p-4 inline-block">
                <p className="text-gray-700">
                  Redirecting to login page in <span className="font-bold text-green-800">{countdown}</span> seconds
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={goToHomePage}
                className="bg-white border-2 border-green-800 text-green-800 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors w-full md:w-auto"
              >
                Go to Homepage
              </button>
              <button
                onClick={goToLogin}
                className="bg-green-800 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}