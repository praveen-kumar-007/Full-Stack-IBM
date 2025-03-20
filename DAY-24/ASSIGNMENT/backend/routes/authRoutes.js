const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');
const router = express.Router();
require('dotenv').config();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) return res.status(400).json({ message: 'All fields are required' });
    
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ name, email, password: hashedPassword });
    
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;