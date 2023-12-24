const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Importing Routes
const statusRoutes = require("./routes/status.routes");
const userRoutes = require("./routes/user.routes");

//Using Routes

app.use("/api/v1", statusRoutes, userRoutes);

module.exports = app;
