const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const GetData = require("./routes/SentData.js"); // Import the route

dotenv.config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
const uri = `mongodb+srv://webcanvas555:${process.env.DB_USER_PASS}@cluster0.bg9lk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Use the GetData route
app.use("/", GetData);

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
