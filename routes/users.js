const express = require('express');
const router = express.Router();
const { getUser } = require("../service/users.js");

router.get("/:id", getUser);

module.exports = router;