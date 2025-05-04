"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { bricolage } from "../layout";
import Header from "@/components/Header";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAdmin, setAdmin] = useState(false);

  const handleToggle = () => {
    setAdmin(!isAdmin);
    if (isAdmin) {
      document.documentElement.classList.remove("admin");
    } else {
      document.documentElement.classList.add("admin");
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (isAdmin) {
        const response = await axios.post("http://localhost:8000/admin/register", {
          name,
          email,
          password,
        });
        if (response) {
          router.push("/");
        }
      } else {
        const response = await axios.post("http://localhost:8000/user/register", {
          name,
          email,
          password,
        });
        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log("Error in handleSubmit : ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="h-screen w-full flex items-center justify-center animate-blur-in">
        <div className="p-8 pt-12 pb-12 rounded-lg shadow-lg w-full max-w-md border-2 border-gray-600">
          <h2 className="text-2xl text-green-600 text-center">SignUp</h2>
          <p className="text-l text-black text-center mb-6">
            {" "}
            already have an account{" "}
            <span className="text-blue-400">
              <Link href="/login" className="hover:text-green-600 transition">
                login
              </Link>
            </span>
          </p>

          <div className="flex items-center">
            <div
              onClick={handleToggle}
              className={`relative inline-flex items-center cursor-pointer w-96 h-10 rounded-full transition-colors duration-300 mb-4 ${
                isAdmin ? "bg-yellow-600" : "bg-green-600"
              }`}
            >
              <span
                className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  isAdmin ? "translate-x-80" : "translate-x-8"
                }`}
              />
              <span
                className={`absolute text-md font-semibold text-white ${
                  isAdmin ? "left-6" : "right-6"
                }`}
              >
                {isAdmin ? "Admin" : "User"}
              </span>
            </div>
          </div>

          <input
            type="name"
            placeholder="enter name"
            className="w-full mb-4 p-3 text-black rounded-md focus:outline-none focus: ring-1 focus:ring-green-400"
            onChange={handleName}
          />

          <input
            type="email"
            placeholder="enter email"
            className="w-full mb-4 p-3 text-black rounded-md focus:outline-none focus: ring-1 focus:ring-green-400"
            onChange={handleEmail}
          />

          <input
            type="password"
            placeholder="enter password"
            className="w-full mb-6 p-3 text-black rounded-md focus:outline-none focus: ring-1 focus:ring-green-400"
            onChange={handlePassword}
          />

          <button
            onClick={handleSubmit}
            className="w-full text-white py-3 rounded-md bg-gradient-to-r from-yellow-400 to-green-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
