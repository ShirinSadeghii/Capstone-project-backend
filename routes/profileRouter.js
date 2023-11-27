const express = require('express');
const jwt = require('jsonwebtoken');
const {jwtSecretKey} = process.env;
const router = express.Router();


router.get("/", (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        res.json({ message: `Welcome ${user.name}!` });
    });
});

module.exports = router;