const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');

// env config
dotenv.config();

// router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const registerRoutes = require("./routes/registerRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// MongoDB Connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com']
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));



// Increase JSON body size to handle base64 image uploads
app.use(bodyParser.json({ limit: '10mb' }));       // handle large JSON payloads
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // handle URL-encoded payloads

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api", authRoutes);
app.use("/api", registerRoutes);
app.use("/api", uploadRoutes);

// Note: Frontend is served separately in production
// Use a reverse proxy (nginx) or deploy frontend and backend separately

// PORT
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
