const express = require('express')
const { getAllUsers } = require('../controllers/userControllers')

//router object
const router = express.Router()

// Get All users
router.get('/all-users', getAllUsers);

module.exports = router