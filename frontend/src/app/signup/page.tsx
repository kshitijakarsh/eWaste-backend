"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { bricolage } from "../layout";
import Header from "@/components/Header";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/register", {
        name,
        email,
        password,
      });
      if (response) {
        router.push("/");
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

          <h2 className="text-2xl text-green-600 mb-6 text-center">SignUp</h2>


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
