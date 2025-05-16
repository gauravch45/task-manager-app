const express = require('express');
const router = express.Router();
const User = require('../models/Users'); // Adjust the path if needed
const userController = require('../controllers/usercontroller');


console.log("✅ usersRoutes.js loaded");
// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
