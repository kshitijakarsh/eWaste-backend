"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import router from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  }, []);

  useEffect(() => {
    async function checkAdmin() {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:8000/admin/details", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res) {
          setAdmin(true);
        }
      } catch (error) {
        console.log("Error found while checking for admin : ", error);
      }
    }

    checkAdmin();
  }, []);

  function handleLogOut() {
    localStorage.clear();
    setLogged(false);
  }

  return (
    <header className="w-full shadow-md fixed top-0 z-50 font-[bricolage] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-800">
          EcoTech
        </Link>
        <nav>
          <ul className="flex space-x-6 text-black text-lg font-regular">
            <li>
              <Link href="/" className="hover:text-green-600 transition mr-6">
                home
              </Link>
              <Link href="/about" className="hover:text-green-600 transition">
                about
              </Link>
            </li>
            {logged ? (
              <>
                {admin ? (
                  <li>
                    <Link
                      href={`/dashboard/user/${id}`}
                      className="hover:text-green-600 transition"
                    >
                      dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={`/dashboard/admin/${id}`}
                      className="hover:text-green-600 transition"
                    >
                      dashboard
                    </Link>
                  </li>
                )}
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
