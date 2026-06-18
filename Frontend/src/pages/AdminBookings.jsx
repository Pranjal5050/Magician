import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { toast } from "react-toastify";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const { data } = await axios.get(
        `${API_URL}/api/admin/bookings`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setBookings(data.bookings);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/api/admin/booking/${id}`,
        {
          status,
        }
      );

      fetchBookings();

      toast.success(`Booking ${status}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#07101f] text-white p-4 md:p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Booking Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Manage all event booking requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

        <div className="bg-[#0d1628] p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Total Bookings</h3>
          <p className="text-3xl font-bold text-[#D4AF37] mt-2">
            {bookings.length}
          </p>
        </div>

        <div className="bg-[#0d1628] p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Pending</h3>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {bookings.filter((b) => b.status === "Pending").length}
          </p>
        </div>

        <div className="bg-[#0d1628] p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Approved</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">
            {bookings.filter((b) => b.status === "Approved").length}
          </p>
        </div>

        <div className="bg-[#0d1628] p-6 rounded-2xl border border-white/10">
          <h3 className="text-gray-400">Rejected</h3>
          <p className="text-3xl font-bold text-red-400 mt-2">
            {bookings.filter((b) => b.status === "Rejected").length}
          </p>
        </div>

      </div>

      {/* Booking Cards */}
      <div className="grid gap-6">

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-[#0d1628] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

              {/* Left */}
              <div className="space-y-3">

                <h2 className="text-2xl font-bold text-[#D4AF37]">
                  {booking.fullname}
                </h2>

                <p>
                  <span className="text-gray-400">Email:</span>{" "}
                  {booking.email}
                </p>

                <p>
                  <span className="text-gray-400">Phone:</span>{" "}
                  {booking.phonenumber}
                </p>

                <p>
                  <span className="text-gray-400">Location:</span>{" "}
                  {booking.eventlocation}
                </p>

                <p>
                  <span className="text-gray-400">Event Date:</span>{" "}
                  {new Date(
                    booking.eventdate
                  ).toLocaleDateString()}
                </p>

                <p>
                  <span className="text-gray-400">Message:</span>
                </p>

                <p className="text-gray-300 leading-7">
                  {booking.message}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-between gap-5">

                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${booking.status === "Approved"
                      ? "bg-green-500/20 text-green-400"
                      : booking.status === "Rejected"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                      }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        "Approved"
                      )
                    }
                    className="cursor-pointer px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        "Rejected"
                      )
                    }
                    className="cursor-pointer px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
                  >
                    Reject
                  </button>

                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminBookings;