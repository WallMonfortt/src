const express = require('express');
const userRoutes = require("./routes/users.routes")
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.use("/Api/v1",userRoutes);



module.exports= app;