const Booking = require("../models/booking.model");
const transporter = require("../services/mail.service");

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

        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|in)$/i;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid Gmail, Yahoo, Outlook or Hotmail email",
            });
        }

        const phoneRegex = /^[0-9]{10,15}$/;

        if (!phoneRegex.test(phonenumber)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid phone number",
            });
        }

        const selectedDate = new Date(eventdate);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            return res.status(400).json({
                success: false,
                message: "Event date cannot be in the past",
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


        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.CLIENT_EMAIL,

                subject: "New Magic Show Booking",

                html: `
    <h2>New Booking Received</h2>

    <p><strong>Name:</strong> ${fullname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phonenumber}</p>
    <p><strong>Event Date:</strong> ${eventdate}</p>
    <p><strong>Location:</strong> ${eventlocation}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,

                subject: "Booking Confirmation",

                html: `
    <div style="font-family: Arial, sans-serif;">
      <h2>Thank You For Booking Magicalmost</h2>

      <p>Hello ${fullname},</p>

      <p>We have received your booking request successfully.</p>

      <p>Our team will contact you shortly regarding your event.</p>

      <br>

      <p>Regards,</p>
      <p>Magicalmost Team</p>
    </div>
  `,
            });
        } catch (mailError) {
            console.log("MAIL ERROR:", mailError.message);
        }

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