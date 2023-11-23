const knex = require("knex")(require("./knexfile.js"));
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const Amadeus = require('amadeus');
const PORT = 8085;

console.log("hello");



// middleware to parse req.body
app.use(express.json());
//required to parse stringified array of objects from SQL
app.use(bodyParser.json())
app.use(cors());


app.get("/", async (_req, res) => {
    try {
      const data = await knex("flights_list");
      res.send(data);
    } catch {
      res.status(500).send("Error getting flight info");
      console.log("does this work?");
    }
  });

app.get("/flightsearch/:city", async (req, res) => {
    const data = await knex("flights_list").where("destination_city", req.params.id);
    res.json(data);
})


// const amadeus = new Amadeus({
//     clientId: 'BcrJHy9X8QiJ6US4WvPGUWD3GBKSIEnF',
//     clientSecret: 'n9MbALzjG2nIUjZz',
// });
// app.get(`/city-and-airport-search/:parameter`, (req, res) => {
//     const parameter = req.params.parameter;
//     // Which cities or airports start with the parameter variable
//     amadeus.referenceData.locations
//         .get({
//             keyword: parameter,
//             subType: Amadeus.location.any,
//         })
//         .then(function (response) {
//             res.send(response.result);
//         })
//         .catch(function (response) {
//             res.send(response);
//         });
// });

// app.get(`/flight-search`, (req, res) => {
//     const originCode = req.query.originCode;
//     const destinationCode = req.query.destinationCode;
//     const dateOfDeparture = req.query.dateOfDeparture
//     // Find the cheapest flights
//     amadeus.shopping.flightOffersSearch.get({
//         originLocationCode: originCode,
//         destinationLocationCode: destinationCode,
//         departureDate: dateOfDeparture,
//         adults: '1',
//         max: '7'
//     }).then(function (response) {
//         res.send(response.result);
//     }).catch(function (response) {
//         res.send(response);
//     });
//     });

// app.post(`/flight-confirmation`, (req, res) => {
//     const flight = req.body.flight
//     // Confirm availability and price
//     amadeus.shopping.flightOffers.pricing.post(
//         JSON.stringify({
//             'data': {
//                 'type': 'flight-offers-pricing',
//                 'flightOffers': [flight],
//             }
//         })
//     ).then(function (response) {
//             res.send(response.result);
//         }).catch(function (response) {
//             res.send(response)
//         })
// })

// app.post(`/flight-booking`, (req, res) => {
//     // Book a flight
//     const flight = req.body.flight;
//     const name = req.body.name;
//     amadeus.booking.flightOrders.post(
//         JSON.stringify({
//             'data': {
//                 'type': 'flight-order',
//                 'flightOffers': [flight],
//                 'travelers': [{
//                     "id": "1",
//                     "dateOfBirth": "1982-01-16",
//                     "name": {
//                         "firstName": "bob",
//                         "lastName": "bobert"
//                     },
//                     "gender": "MALE",
//                     "contact": {
//                         "emailAddress": "jorge.gonzales833@telefonica.es",
//                         "phones": [{
//                             "deviceType": "MOBILE",
//                             "countryCallingCode": "34",
//                             "number": "480080076"
//                         }]
//                     },
//                     "documents": [{
//                         "documentType": "PASSPORT",
//                         "birthPlace": "Madrid",
//                         "issuanceLocation": "Madrid",
//                         "issuanceDate": "2015-04-14",
//                         "number": "00000000",
//                         "expiryDate": "2025-04-14",
//                         "issuanceCountry": "ES",
//                         "validityCountry": "ES",
//                         "nationality": "ES",
//                         "holder": true
//                     }]
//                 }]
//             }
//         })
//     ).then(function (response) {
//         res.send(response.result);
//     }).catch(function (response) {
//         res.send(response);
//     });
// });

app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}`)
);
