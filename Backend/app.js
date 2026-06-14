const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db/db");
connectDB();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const bookingRoute = require("./routes/booking.route");
const adminLogin = require("./routes/admin.route");

app.use("/api", bookingRoute);
app.use("/admin", adminLogin);

module.exports = app;