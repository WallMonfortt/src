const express = require('express');
// const {user} = require("./models");
const userRoutes = require("./routes/users.routes")
const app = express();

app.use(express.json());

app.use("/Api/v1",userRoutes);



module.exports= app;