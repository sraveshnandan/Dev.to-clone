const mongoose = require("mongoose");
//Createing a Database Connection function
const ConnectToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then((con) =>
      //After Connecting to the database
      console.log(`Database is  connected to : ${con.connection.host}`)
    );
  } catch (error) {
    //In case of any error trying to reconnect to the databases
    setTimeout(() => {
      ConnectToDatabase();
    }, 5000);
    console.log(error);
  }
};

//Exporting The Database Functionइ
module.exports = ConnectToDatabase;
