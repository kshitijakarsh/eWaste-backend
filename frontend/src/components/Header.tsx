"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  }, []);

  const handleDashboard = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/home");
      return;
    }

    try {
      const res = await axios.get("http://localhost:8000/admin/details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res?.data?.admin === true) {
        router.push(`/dashboard/admin/${id}`);
      } else {
        router.push(`/dashboard/user/${id}`);
      }
    } catch (error) {
      console.error("Error while checking admin status:", error);
      router.push(`/dashboard/user/${id}`);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    setLogged(false);
    router.push("/login");
  };

  return (
    <header className="w-full shadow-md fixed top-0 z-50 font-[bricolage] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-800">
          EcoTech
        </Link>
        <nav>
          <ul className="flex space-x-6 text-black text-lg font-regular items-center">
            <li>
              <Link href="/" className="hover:text-green-600 transition">
                home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600 transition">
                about
              </Link>
            </li>
            {logged ? (
              <>
                <li>
                  <button
                    onClick={handleDashboard}
                    className="hover:text-green-600 transition"
                  >
                    dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:text-green-600 transition text-lg"
                  >
                    logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/signup"
                    className="hover:text-green-600 transition"
                  >
                    sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-green-600 transition"
                  >
                    login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
