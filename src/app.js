const express = require('express');
const morgan = require('morgan');
require('dotenv').config();


const app = express();

//routes
const routes = require('./routes/routes')

//middlewares
app.use(morgan("dev"));
app.use(express.json());


app.use("/api", routes);

app.get("/api/", async (req, res) => {
  res.json({API: 'UP'});
});

module.exports = app;