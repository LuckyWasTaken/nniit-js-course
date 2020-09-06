const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/user');
const router = Router();

//  /api/auth/register
router.post('/register', 
[
    check('email', 'Email is wrong!').isEmail(),
    check('password', 'Password should be not shorter than 6 symbols').isLength({min: 6})
],
async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Sorry, your data is wrong!'
            })
        }



        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if (candidate) {
            return res.status(400).json({message: 'Sorry, such user is alredy exist!'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword})
        await user.save();
        res.status(201).json({message: 'The user is created'});

    } catch(e) {
        res.status(500).json({message: 'Something goes wrong...please, try again!'});
    }

})

//  /api/auth/login
router.post('/login',
    [
        check ('email', 'Please, enter correct password.').normalizeEmail().isEmail(),
        check('password', 'Please, enter your password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Sorry, your data is wrong!'
            })
        }

        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({message: 'Sorry, user isn`t found!'})
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'Sorry, password is wrong!'});
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch(e) {
        res.status(500).json({message: 'Something goes wrong...please, try again!'});
    }

})


module.exports = router