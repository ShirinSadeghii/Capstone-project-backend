/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const fs = require('fs');
const express = require('express');
const app = express();

const hotelData = [
  {
    id: 1,
    name: "Ocean Drive Barcelona",
    city: "Barcelona",
    rating: "4star.png",
    price: "$285/night",
    imagePath: "barcelona-1.jpeg",
  },
  {
    id: 2,
    name: "Ohla Barcelona",
    city: "Barcelona",
    rating: "5star.png",
    price: "$420/night",
    imagePath: "barcelona-2.jpeg",
  },
  {
    id: 3,
    name: "Hotel Casa Fuster",
    city: "Barcelona",
    rating: "5star.png",
    price: "$470/night",
    imagePath: "barcelona-3.jpeg",
  },
  {
    id: 4,
    name: "Renaissance Barcelona Hotel",
    city: "Barcelona",
    rating: "4star.png",
    price: "$160/night",
    imagePath: "barcelona-4.jpeg",
  },
  {
    id: 5,
    name: "The Guardsman",
    city: "London",
    rating: "5star.png",
    price: "$550/night",
    imagePath: "london-1.jpeg",
  },
  {
    id: 6,
    name: "Leonardo Royal London Tower ",
    city: "London",
    rating: "4star.png",
    price: "$140/night",
    imagePath: "london-2.jpeg",
  },
  {
    id: 7,
    name: "The Cavendish London",
    city: "London",
    rating: "5star.png",
    price: "$350/night",
    imagePath: "london-3.jpeg",
  },
  {
    id: 8,
    name: "Holmes Hotel London",
    city: "London",
    rating: "4star.png",
    price: "$280/night",
    imagePath: "london-4.jpeg",
  },
  {
    id: 9,
    name: "Empire Hotel",
    city: "New York",
    rating: "4star.png",
    price: "$250/night",
    imagePath: "nyc-1.jpeg",
  },
  {
    id: 10,
    name: "Arlo Nomad",
    city: "New York",
    rating: "5star.png",
    price: "$428/night",
    imagePath: "nyc-2.jpeg",
  },
  {
    id: 11,
    name: "Mondrian Park Avenue",
    city: "New York",
    rating: "5star.png",
    price: "$500/night",
    imagePath: "nyc-3.jpeg",
  },
  {
    id: 12,
    name: "The Plaza",
    city: "New York",
    rating: "5star.png",
    price: "$830/night",
    imagePath: "nyc-4.jpeg",
  },
  {
    id: 13,
    name: "Delphi Hotel",
    city: "Los Angeles",
    rating: "4star.png",
    price: "$215/night",
    imagePath: "la-1.jpeg",
  },
  {
    id: 14,
    name: "Marina Del Rey",
    city: "Los Angeles",
    rating: "3star.png",
    price: "$160/night",
    imagePath: "la-2.jpeg",
  },
  {
    id: 15,
    name: "Hyatt Centric Long Beach",
    city: "Los Angeles",
    rating: "3star.png",
    price: "$225/night",
    imagePath: "la-3.jpeg",
  },
  {
    id: 16,
    name: "Kimpton La Peer Hotel",
    city: "Los Angeles",
    rating: "4star.png",
    price: "$300/night",
    imagePath: "la-4.jpeg",
  },
  {
    id: 17,
    name: "Ritz-Carlton Waikiki Beach",
    city: "Honolulu",
    rating: "5star.png",
    price: "$1,400/night",
    imagePath: "hawaii-1.jpeg",
  },
  {
    id: 18,
    name: "Kaimana Beach Hotel",
    city: "Honolulu",
    rating: "5star.png",
    price: "$430/night",
    imagePath: "hawaii-2.jpeg",
  },
  {
    id: 19,
    name: "Outrigger Waikiki Beach Resort",
    city: "Honolulu",
    rating: "4star.png",
    price: "$375/night",
    imagePath: "hawaii-3.jpeg",
  },
  {
    id: 20,
    name: "The Laylow, Autograph Collection",
    city: "Honolulu",
    rating: "4star.png",
    price: "$455/night",
    imagePath: "hawaii-4.jpeg",
  },
  {
    id: 21,
    name: "Athens Marriot Hotel",
    city: "Athens",
    rating: "3star.png",
    price: "$200/night",
    imagePath: "athens-1.jpeg",
  },
  {
    id: 22,
    name: "The Dolli at Acropolis",
    city: "Athens",
    rating: "5star.png",
    price: "$500/night",
    imagePath: "athens-4.jpeg",
  },
  {
    id: 23,
    name: "MET34 Athens",
    city: "Athens",
    rating: "4star.png",
    price: "$172/night",
    imagePath: "athens-2.jpeg",
  },
  {
    id: 24,
    name: "Grand Hyatt",
    city: "Athens",
    rating: "4star.png",
    price: "$150/night",
    imagePath: "athens-3.jpeg",
  },
  {
    id: 25,
    name: "Four Season Paris",
    city: "Paris",
    rating: "5star.png",
    price: "$655/night",
    imagePath: "paris-1.jpeg",
  },
  {
    id: 26,
    name: "Hotel Malte",
    city: "Paris",
    rating: "4star.png",
    price: "$440/night",
    imagePath: "paris-2.jpeg",
  },
  {
    id: 27,
    name: "Shangri-La Paris",
    city: "Paris",
    rating: "5star.png",
    price: "$960/night",
    imagePath: "paris-3.jpeg",
  },
  {
    id: 28,
    name: "Grand Hotel du Palais Royal",
    city: "Paris",
    rating: "5star.png",
    price: "$800/night",
    imagePath: "paris-4.jpeg",
  },
]



exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hotels_list').del()
  await knex('hotels_list').insert(hotelData)
};
