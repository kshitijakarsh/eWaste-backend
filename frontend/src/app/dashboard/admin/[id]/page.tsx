"use client";

import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Submission {
  points: number;
  id: number;
  itemType: string;
  itemBrand: string;
  itemCondition: string;
  itemImage: string;
  status: string;
  submittedAt: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

const statusOptions = ["Pending", "In Review", "Approved", "Rejected"];

export default function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState<Record<number, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ecoPoint, setEcoPoints] = useState(0);
  const [status, setStatus] = useState<Record<number, string>>({});

  useEffect(() => {
    const fetchAdminDetails = async () => {
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
        setName(res.data.admin.name);
        setEmail(res.data.admin.email);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      }
    };

    fetchAdminDetails();
  }, [router]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:8000/admin/jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.submissions) {
          setSubmissions(res.data.submissions);

          const initialStatus: { [key: string]: string } = {};
          res.data.submissions.forEach(
            (submission: { id: string | number; status: any }) => {
              initialStatus[submission.id] = submission.status;
            }
          );
          setStatus(initialStatus);
        }
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [router]);

  const handleStatusChange = async (submissionId: number) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const newStatus = status[submissionId];
    if (!newStatus) return;

    try {
      const res = await axios.patch(
        "http://localhost:8000/admin/updateStatus",
        {
          submissionId,
          newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        // Update the local state to reflect the change
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === submissionId ? { ...s, status: newStatus } : s
          )
        );
        alert("Status updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update status", error);
      alert("Failed to update status. Please try again.");
    }
  };

  const handlePointsInput = (submissionId: number, value: string) => {
    setPoints((prev) => ({ ...prev, [submissionId]: value }));
  };

  const awardPoints = async (submissionId: number) => {
    const token = localStorage.getItem("token");
    const amount = points[submissionId];

    if (!token || !amount) return;

    try {
      await axios.patch(
        "http://localhost:8000/admin/award",
        {
          submissionId,
          ecoPoint: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Points awarded successfully!");
      setPoints((prev) => ({ ...prev, [submissionId]: "" }));
    } catch (err) {
      console.error("Error awarding points:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const res = await axios.post("http://localhost:8000/admin/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res) {
        router.push("/delete");
      }
    } catch (err) {
      console.log("Error found while deleting account : ", err);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Admin Dashboard
        </h1>

        {loading ? (
          <p className="text-lg">Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <p className="text-lg">No submissions assigned yet.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6 p-6 w-full max-w-7xl">
            <div className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[400px] min-w-[280px] max-w-[400px] flex-none bg-white border-solid border-4 border-green-800 text-black rounded-2xl col-span-1 shadow-xl">
              <h1 className="text-center text-2xl mt-4 font-semibold">
                Admin Details
              </h1>
              <div className="flex justify-center">
                <hr className="w-3/4 border-t border-green-800 my-2" />
              </div>

              <p className="bg-white mt-8 mx-4 border border-gray-400 p-2 rounded-2xl shadow-lg">
                Name : {name}
              </p>
              <p className="bg-white mt-2 mx-4 border border-gray-400 p-2 rounded-2xl shadow-lg">
                Email : {email}
              </p>

              <div className="flex flex-wrap justify-center gap-4 p-4 mt-4">
                <button
                  className="bg-white p-2 rounded-2xl border border-green-300 shadow-lg hover:drop-shadow-xl"
                  onClick={handleDelete}
                >
                  Delete Account
                </button>
              </div>
            </div>

            <div className="bg-white border-2 rounded-2xl col-span-2 p-6 shadow-xl">
              {submissions.map((submission) => {
                const currentStatus =
                  status[submission.id] || submission.status;
                return (
                  <div
                    key={submission.id}
                    className="flex flex-col md:flex-row border rounded-xl p-4 mb-6 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                      <img
                        src={submission.itemImage}
                        alt={submission.itemType}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-4 flex flex-col justify-center mb-4 md:mb-0">
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <h3 className="text-gray-500 text-sm">Type</h3>
                          <p className="text-xl font-semibold text-black">
                            {submission.itemType}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-gray-500 text-sm">Brand</h3>
                          <p className="text-xl font-semibold text-black">
                            {submission.itemBrand}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-gray-500 text-sm">Condition</h3>
                          <p className="text-xl font-semibold text-black">
                            {submission.itemCondition}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/4 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-4 flex flex-col justify-center space-y-4">
                      <div>
                        <h3 className="text-black text-sm mb-2">Status</h3>
                        <select
                          className="w-full p-2 rounded-lg border border-green-800 text-black"
                          value={currentStatus}
                          onChange={(e) =>
                            setStatus((prev) => ({
                              ...prev,
                              [submission.id]: e.target.value,
                            }))
                          }
                        >
                          {statusOptions.map((statusOption) => (
                            <option key={statusOption} value={statusOption}>
                              {statusOption}
                            </option>
                          ))}
                        </select>

                        <button
                          onClick={() => handleStatusChange(submission.id)}
                          className="mt-2 w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Update Status
                        </button>
                      </div>

                      <div>
                        <h3 className="text-black text-sm mb-2">Points</h3>
                        <input
                          type="number"
                          value={points[submission.id] || ""}
                          onChange={(e) =>
                            handlePointsInput(submission.id, e.target.value)
                          }
                          className="w-full p-2 rounded-lg border border-green-800 text-black"
                        />

                        <button
                          onClick={() => awardPoints(submission.id)}
                          className="mt-2 w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          Award Points
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
