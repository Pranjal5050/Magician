const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db/db");
connectDB();
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Backend Working");
});
app.use(
    cors({
        origin: [
            "https://magicianwebdevapp.netlify.app",
            "http://localhost:5173"
        ],
    methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());

const bookingRoute = require("./routes/booking.route");
const adminLogin = require("./routes/admin.route");

app.use("/api", bookingRoute);
app.use("/admin", adminLogin);

module.exports = app;