const express = require('express');
const router = express.Router();
const { getUser } = require("../service/users.js");

router.get("/:username", getUser);

module.exports = router;