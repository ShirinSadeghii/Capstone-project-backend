const express = require("express");
const app = express();
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

let users = {};

router.post("/", async (req, res) => {
    const { username, name, password } = req.body;
    await knex("login_users").insert(req.body);
    users[username] = {
      username,
      name,
      password, 
    };
    // console.log('Users Object:', users);
    res.json({ success: "true" });
  });

module.exports = router