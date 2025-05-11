"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { Package, Upload } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Submission {
  id: string;
  itemType: string;
  itemBrand: string;
  itemCondition: string;
  status: string;
  itemImage: string;
  points: number;
}

export default function UserDashboard() {
  const params = useParams();
  const id = params?.id;
  const [condition, setCondition] = useState("Select");
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const router = useRouter();

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };

  const Submit = async () => {
    if (!image || !type || !brand || condition === "Select") {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("brand", brand);
    formData.append("condition", condition);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/product/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Submission successful!");
      fetchSubmissions();
      setType("");
      setBrand("");
      setCondition("Select");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Submission failed.");
    }
  };

  const fetchSubmissions = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push('/login')
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8000/product/submission",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const submissionsData = response.data.submissions.map((sub: any) => ({
        id: sub.id,
        itemType: sub.itemType,
        itemBrand: sub.itemBrand,
        itemCondition: sub.itemCondition,
        status: sub.status,
        itemImage: sub.itemImage,
        points: 10,
      }));

      setSubmissions(submissionsData);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-20 p-6">
        <div className="col-span-1 h-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                <Package className="text-2xl text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-black">
                Your Submissions
              </h1>
            </div>

            {submissions.length === 0 ? (
              <p className="text-gray-500 text-sm">No submissions found.</p>
            ) : (
              submissions.map((sub) => (
                <div
                  key={sub.id}
                  className="mt-2 flex gap-6 items-start border border-gray-200 p-4 rounded-lg transition-shadow hover:shadow-2xl bg-white"
                >
                  <img
                    src={sub.itemImage}
                    alt="submission"
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                  <div className="flex-1 space-y-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {sub.itemBrand} {sub.itemType}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Condition: {sub.itemCondition}
                    </p>
                    <p className="text-sm text-gray-600">
                      Points Earned:{" "}
                      <span className="font-medium text-green-600">
                        {sub.points}
                      </span>
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                      {sub.status}
                    </span>
                  </div>
                </div>
              ))
            )}
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
                value={type}
                placeholder="Eg: Phone, Laptop"
                className="text-black w-full shadow-sm p-2 rounded-xl border border-gray-300"
                onChange={handleType}
              />
            </div>

            <div className="p-4">
              <h1 className="text-black mb-2">Brand</h1>
              <input
                type="text"
                value={brand}
                placeholder="Eg: Apple, Samsung"
                className="text-black w-full p-2 rounded-xl shadow-sm border border-gray-300"
                onChange={handleBrand}
              />
            </div>

            <div className="relative p-4">
              <h1 className="text-black mb-2">Condition</h1>
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
                    {["Superb", "Good", "Bad"].map((cond) => (
                      <button
                        key={cond}
                        onClick={() => {
                          setCondition(cond);
                          setIsOpen(false);
                        }}
                        className={`block text-black w-full px-4 py-2 text-left hover:bg-opacity-20 ${
                          cond === "Superb"
                            ? "hover:bg-green-200"
                            : cond === "Good"
                            ? "hover:bg-yellow-200"
                            : "hover:bg-red-200"
                        } rounded-md transition duration-150 ease-in-out`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 p-4">
              <h1 className="text-black">Upload Image</h1>
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center w-full h-52 border-2 ${
                  isDragging
                    ? "border-blue-400 bg-blue-50"
                    : "border-dashed border-gray-300 bg-gray-50"
                } rounded-lg cursor-pointer transition-colors duration-200`}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Uploaded preview"
                    className="h-full object-contain rounded-md"
                  />
                ) : (
                  <div className="text-center px-4">
                    <p className="text-gray-500">
                      Drag & drop or click to upload an image
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Only image files are supported
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleChange}
                  hidden
                />
              </div>
            </div>

            <div className="p-4">
              <button
                onClick={Submit}
                className="w-full rounded-xl bg-green-500 px-4 py-3 font-semibold text-white hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
