const express = require('express');
const app = express();
// const router = express.Router();
const knex = require("knex")(require("./knexfile.js"));
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { PORT } = process.env;
// const flightRouter = require("./routes/flightRouter.js");
// const hotelRouter = require("./routes/hotelRouter.js");

console.log("hello");


// middleware to parse req.body
app.use(express.json());

//required to parse stringified array of objects from SQL
app.use(bodyParser.json())
app.use(cors());

app.use(express.static("public"));
// app.use("/flightsearch", flightRouter);
// app.use("/hotelsearch", hotelRouter);


app.get("/flightsearch/:city", async (req, res) => {
    const data = await knex("flights_list").where("destination_city", req.params.city);
    res.json(data);
})

app.get("/hotelsearch", async (req, res) => {
    const allHotels = await knex("hotels_list");
    res.send(allHotels);
})

app.get("/hotelsearch/:city", async (req, res) => {
    try {
      const hotelData = await knex("hotels_list").where("city", req.params.city);
      res.send(hotelData);
    } catch {
      res.status(500).send("Error getting hotel info");
      console.log("does this work?");
    }
  });

app.get("/:city", async (_req, res) => {
    try {
      const data = await knex("flights_list");
      res.send(data);
    } catch {
      res.status(500).send("Error getting flight info");
    }
  });


app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}`)
);
