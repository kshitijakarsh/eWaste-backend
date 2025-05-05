"use client";
import Header from "@/components/Header";
import { Package, Upload } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function UserDashboard() {
  const params = useParams();
  const id = params?.id;
  const [condition, setCondition] = useState("Select");
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-20 p-6">
        <div className="col-span-1 h-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex gap-4 items-center">
              <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                <Package className="text-2xl text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-black">
                Your Submissions
              </h1>
            </div>

            <div className="mt-6">
              <div className="flex gap-6 items-start border border-gray-200 p-4 rounded-lg transition-shadow hover:shadow-2xl bg-white">
                <img
                  src="/image.png"
                  alt="User submission preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />

                <div className="flex-1 space-y-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    iPhone 11
                  </h2>
                  <p className="text-sm text-gray-600">Condition: Excellent</p>
                  <p className="text-sm text-gray-600">
                    Points Earned:{" "}
                    <span className="font-medium text-green-600">800</span>
                  </p>
                </div>

                <div>
                  <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    Approved
                  </span>
                </div>
              </div>
            </div>


            <div className="mt-2 flex gap-6 items-start border border-gray-200 p-4 rounded-lg transition-shadow hover:shadow-2xl bg-white">
              <img
                src="/image.png"
                alt="User submission preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />

              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  iPhone 11
                </h2>
                <p className="text-sm text-gray-600">Condition: Excellent</p>
                <p className="text-sm text-gray-600">
                  Points Earned:{" "}
                  <span className="font-medium text-green-600">800</span>
                </p>
              </div>

              <div>
                <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  Approved
                </span>
              </div>
            </div>
            <div className="mt-2 flex gap-6 items-start border border-gray-200 p-4 rounded-lg transition-shadow hover:shadow-2xl bg-white">
              <img
                src="/image.png"
                alt="User submission preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />

              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  iPhone 11
                </h2>
                <p className="text-sm text-gray-600">Condition: Excellent</p>
                <p className="text-sm text-gray-600">
                  Points Earned:{" "}
                  <span className="font-medium text-green-600">800</span>
                </p>
              </div>

              <div>
                <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <div className="flex gap-4 items-center">
            <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
              <Upload className="text-2xl text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-black">Submit a Device</h1>
          </div>

          <div className="mt-4">
            <div className="p-4">
              <h1 className="text-black mb-2">Device Type</h1>
              <input
                type="text"
                placeholder="Eg: Phone, Laptop"
                className="text-black w-full shadow-sm p-2 rounded-xl border border-gray-300"
              />
            </div>
            <div className="p-4 ">
              <h1 className="text-black mb-2">Brand</h1>
              <input
                type="text"
                placeholder="Eg: Apple, Samsung"
                className="text-black w-full p-2 rounded-xl shadow-sm border border-gray-300"
              />
            </div>
            <div className="relative p-4">
              <h1 className="text-black mb-2 font-semibold text-lg">
                Condition
              </h1>
              <button
                onClick={handleDropdown}
                className="text-black border border-gray-300 p-3 rounded-2xl w-full flex justify-between items-center bg-white shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                <span>{condition}</span>
                <svg
                  className={`h-5 w-5 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setCondition("Superb");
                        setIsOpen(false);
                      }}
                      className="block text-black w-full px-4 py-2 text-left hover:bg-green-200 rounded-md transition duration-150 ease-in-out"
                    >
                      Superb
                    </button>
                    <button
                      onClick={() => {
                        setCondition("Good");
                        setIsOpen(false);
                      }}
                      className="block text-black w-full px-4 py-2 text-left hover:bg-yellow-200 rounded-md transition duration-150 ease-in-out"
                    >
                      Good
                    </button>
                    <button
                      onClick={() => {
                        setCondition("Bad");
                        setIsOpen(false);
                      }}
                      className="block text-black w-full px-4 py-2 text-left hover:bg-red-200 rounded-md transition duration-150 ease-in-out"
                    >
                      Bad
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
