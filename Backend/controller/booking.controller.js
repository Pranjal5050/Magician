const Booking = require("../models/booking.model");

const createBooking = async (req, res) => {
    try {
        const {
            fullname,
            email,
            phonenumber,
            eventdate,
            eventlocation,
            message,
        } = req.body;

        if (
            !fullname ||
            !email ||
            !phonenumber ||
            !eventdate ||
            !eventlocation ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const booking = await Booking.create({
            fullname,
            email,
            phonenumber,
            eventdate,
            eventlocation,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Booking submitted successfully",
            booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );

  res.json({
    success: true,
    booking,
  });
};

module.exports = {
    createBooking,
    getAllBookings,
    updateBookingStatus
};