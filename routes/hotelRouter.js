// const express = require('express');
// const router = express.Router();
// const fs = require('fs');

// router.get("/hotelsearch", async (req, res) => {
//     const allHotels = await knex("hotels_list");
//     res.send(allHotels);
// })

// router.get("/hotelsearch/:city", async (req, res) => {
//     try {
//       const hotelData = await knex("hotels_list").where("city", req.params.city);
//       res.send(hotelData);
//     } catch {
//       res.status(500).send("Error getting hotel info");
//       console.log("does this work?");
//     }
//   });

// module.exports = router