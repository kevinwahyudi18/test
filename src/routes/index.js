const express = require("express");
const router = express.Router();
const user = require("./userRoutes")
const admin = require("./adminRoutes")

// router.use('/user', user);
router.use('/admin', admin);


module.exports = router