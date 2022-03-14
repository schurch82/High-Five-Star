const jwt = require('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require('express-async-handler')
const Provider = require('../models/providerModel')

// @desc get all users
// @route GET /api/users/all
const getProviders = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Get Providers'})
})

// @desc add new user
// @route POST /api/users
const registerProviders = asyncHandler(async (req, res) => {
    const {username,password,email,businessname,businesstype,description,rating} = await req.body
    
    // check if form complete
    if(!username || !password || !email  || !businessname || !businesstype || !description) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exists - email should be unique
    const providerExists = await Provider.findOne({email})

    if(providerExists) {
        res.status(400)
        throw new Error('Service Provider already exists')
    }
   //hash password and create user
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const provider = await Provider.create({
        username,
        password: hashedPassword,
        email,
        businessname,
        businesstype,
        description,
        rating:0
    })

    if (provider) {
        res.status(201).json({
            _id: provider.id,
            username: provider.username,
            password:provider.password,
            email:provider.email,
            businessname:provider.businessname,
            businesstype:provider.businesstype,
            description:provider.description,
            rating:provider.rating,
            token: generateToken(provider.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid entry')
    }


})

// @desc authenticate new user
// @route POST /api/users/login
const loginProviders = asyncHandler(async(req, res) => {
    const {email,password} = req.body

    const provider = await Provider.findOne({email})

    if(provider && (await bcrypt.compare(password,provider.password))){
        res.json({
            _id: provider.id,
            username: provider.username,
            password:provider.password,
            email:provider.email,
            businessname:provider.businessname,
            businesstype:provider.businesstype,
            description:provider.description,
            rating:provider.rating,
            token: generateToken(provider.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc add new user
// @route GET /api/users/me
const getCurrentProvider = asyncHandler(async(req, res) => {

    const {_id, username, email,businessname,businesstype,description,rating} = await Provider.findById(req.provider.id)

    res.status(200).json({
        id: _id,
        username,
        email,
        businessname,
        businesstype,
        description,
        rating
    })
})

// @desc update users
// @route PUT /api/users/me
const updateProviders = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Update Provider: ${req.params.id}`})
})

// @desc get all users
// @route DELETE /api/users/:id
const deleteProviders = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete Provider: ${req.params.id}`})
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getProviders,
    registerProviders,
    updateProviders,
    deleteProviders,
    loginProviders,
    getCurrentProvider
}