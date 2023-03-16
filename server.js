require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("db connected!"));

// allow app to accept json in req body
app.use(express.json());

// defining a subscriber rout and using it
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("server started!"));
