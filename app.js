const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

// connect to DB

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB')
);

// import routes
const userRoutes = require("./routes");

//import middleware
app.use(express.json());

//cors
// app.use(cors())

//route middleware
app.use("/api",userRoutes);

app.listen(process.env.PORT, ()=>console.log(
    "server is running on port " + process.env.PORT
))

