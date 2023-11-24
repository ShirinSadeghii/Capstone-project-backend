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
    rating: "adad",
    price: "$285/night",
    imagePath: "./data/images/barcelona-1",
  },
  {
    id: 2,
    name: "Ohla Barcelona",
    city: "Barcelona",
    rating: "adad",
    price: "$420/night",
    imagePath: "./data/images/barcelona-2",
  },
  {
    id: 3,
    name: "Hotel Casa Fuster",
    city: "Barcelona",
    rating: "sdfsd",
    price: "$470/night",
    imagePath: "./data/images/barcelona-3",
  },
  {
    id: 4,
    name: "Renaissance Barcelona Hotel",
    city: "Barcelona",
    rating: "asdsadsada",
    price: "$160/night",
    imagePath: "./data/images/barcelona-4",
  }
]


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hotels_list').del()
  await knex('hotels_list').insert(hotelData)
};
