const userService = require('../services/user.service');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports.register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (!fullname.firstname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const ExistingUser = await userModel.findOne({ email });
        if (ExistingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userService({
            fullname,
            email,
            password: hashedPassword
        })
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie("token", token);
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (!email || !password) {
            return res.status(401).json({ message: "All fields are required" });
        }
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).json({ message: "Email or Password Incorrects" });
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            res.status(401).json({ message: "Email or Password Incorrect" });
        }
        const token = jwt.sign({_id : user._id, email : user.email}, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports.home = async (req, res)=>{
    res.send("Hello");
}