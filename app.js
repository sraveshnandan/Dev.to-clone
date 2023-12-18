const express = require("express");
const cookieParser = require("cookie-parser");
const ConnectToDatabase = require("./config/db");
const app = express();

//Connecting to database
ConnectToDatabase();

//Using middlewares
app.use(cookieParser());
app.use(express.json());

//Importing Routes
const statusRoutes = require("./routes/status.routes");

//Using Routes

app.use("/api/v1", statusRoutes);

module.exports = app;
