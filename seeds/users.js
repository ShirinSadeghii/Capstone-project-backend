/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const fs = require('fs');
const express = require('express');
const app = express();
const users = [
  {
    id: 1,
    username: "shirin_23",
    name: "shirin",
    password: "hello",
  }
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('login_users').del()
  await knex('login_users').insert(users);
};
