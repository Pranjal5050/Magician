const express = require("express");

const {
  createBooking,
  getAllBookings,
  updateBookingStatus
} = require("../controller/booking.controller");

const { isAdmin } = require("../middleware/admin.middleware");

const router = express.Router();

router.post("/booking", createBooking);

router.get("/admin/bookings", isAdmin, getAllBookings);

router.put(
  "/admin/booking/:id",
  updateBookingStatus
);

module.exports = router;