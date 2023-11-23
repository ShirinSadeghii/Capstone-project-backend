const knex = require("knex")(require("./knexfile.js"));
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8085;

console.log("hello");


// middleware to parse req.body
app.use(express.json());
//required to parse stringified array of objects from SQL
app.use(bodyParser.json())
app.use(cors());


app.get("/:city", async (_req, res) => {
    try {
      const data = await knex("flights_list");
      res.send(data);
    } catch {
      res.status(500).send("Error getting flight info");
      console.log("does this work?");
    }
  });

app.get("/flightsearch/:city", async (req, res) => {
    const data = await knex("flights_list").where("destination_city", req.params.city);
    res.json(data);
})



app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}`)
);
