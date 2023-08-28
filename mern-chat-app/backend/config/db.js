const mongoose = require("mongoose");
const colors = require("colors");

// require("dotenv").config();
// mongoose
//     .connect(process.env.MONGO_URI, { useNewUrlParser: true })
//     .then(() => console.log("Database Connected"))
//     .catch(err => console.error(err));
//     // .then(() => console.log("Not Connected"))

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAnsdModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
