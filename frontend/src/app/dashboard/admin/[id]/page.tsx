"use client";

import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

interface Submission {
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

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState<Record<number, string>>({});

  useEffect(() => {
    const fetchSubmissions = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
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
        }
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleStatusChange = async (
    submissionId: number,
    newStatus: string
  ) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.patch(
        "http://localhost:8000/admin/update-status",
        {
          submissionId,
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.updatedSubmission) {
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === submissionId ? res.data.updatedSubmission : s
          )
        );
      }
    } catch (error) {
      console.error("Failed to update status", error);
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
      await axios.post(
        "http://localhost:8000/admin/award-points",
        {
          submissionId,
          points: Number(amount),
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

  return (
    <div className="min-h-screen pt-24 bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Admin Dashboard
        </h1>

        {loading ? (
          <p className="text-gray-600 text-lg">Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <p className="text-gray-600 text-lg">No submissions assigned yet.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="col-span-1 lg:col-span-2 lg:col-start-2 bg-white rounded-2xl shadow hover:shadow-lg transition duration-200 p-4 flex flex-row gap-4"
              >
                {/* Image on the left */}
                <img
                  src={sub.itemImage}
                  alt={`${sub.itemBrand} ${sub.itemType}`}
                  className="w-48 h-48 object-cover rounded-xl"
                />

                {/* Details on the right */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-green-700 mb-1">
                      {sub.itemBrand} {sub.itemType}
                    </h2>
                    <p className="text-gray-800 mb-1">
                      <strong>Condition:</strong> {sub.itemCondition}
                    </p>

                    {/* Status Dropdown */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        value={sub.status}
                        onChange={(e) =>
                          handleStatusChange(sub.id, e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="collected">Collected</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>

                    {/* Points Award Input */}
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Award Points
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Points"
                          value={points[sub.id] || ""}
                          onChange={(e) =>
                            handlePointsInput(sub.id, e.target.value)
                          }
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                        />
                        <button
                          onClick={() => awardPoints(sub.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Award
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      <strong>Submitted by:</strong> {sub.user.name} (
                      {sub.user.email})
                    </p>
                    <p>
                      <strong>Submitted at:</strong>{" "}
                      {new Date(sub.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
