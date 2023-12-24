require("dotenv").config();
const app = require("./app");
const ConnectToDatabase = require("./config/db");
const port = process.env.PORT;

//Connecting to database
ConnectToDatabase();

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
