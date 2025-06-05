const express = require("express");
const router = express.Router();

const { Signup, Login } = require("../controllers/usercontroller.js");

router.post('/signup', Signup);
router.post('/login', Login);  // fixed from './login' to '/login'

module.exports = router;
