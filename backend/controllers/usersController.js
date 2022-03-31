const jwt = require('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc get all users
// @route GET /api/users/all
const getUsers = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Get Users'})
})

// @desc add new user
// @route POST /api/users
const registerUsers = asyncHandler(async (req, res) => {
    const {username,password,email,role} = await req.body
    
    // check if form complete
    if(!username || !password || !email  || !role) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exists - email should be unique
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
   //hash password and create user
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        password: hashedPassword,
        email,
        role
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            password:user.password,
            email:user.email,
            role:user.role,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid entry')
    }


})

// @desc authenticate new user
// @route POST /api/users/login
const loginUsers = asyncHandler(async(req, res) => {
    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            username: user.username,
            password:user.password,
            email:user.email,
            role:user.role,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc add new user
// @route GET /api/users/me
const getMe = asyncHandler(async(req, res) => {
    const {_id, username, email,role} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username,
        email,
        role,
    })
})

// @desc update users
// @route PUT /api/users/me
const updateUsers = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Update User: ${req.params.id}`})
})

// @desc get all users
// @route DELETE /api/users/:id
const deleteUsers = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete User: ${req.params.id}`})
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getUsers,
    registerUsers,
    updateUsers,
    deleteUsers,
    loginUsers,
    getMe
}