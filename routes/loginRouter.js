const express = require("express");
const app = express();
const knex = require("knex")(require("../knexfile.js"));
const jwt = require("jsonwebtoken");
const {jwtSecretKey} = process.env;
const cors = require("cors");
const router = express.Router();

app.use(express.json());
app.use(cors());


router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const users = await knex ("login_users").where({username:username});

    if (users.length > 0) {
        const user = users[0];

        if (user.username === username && user.password === password) {
            const token = jwt.sign({ name: user.name }, jwtSecretKey, {
                expiresIn: '1day',
            });
            res.json({token: token});
            } else {
            res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);    
        }
    });  
  


  module.exports = router