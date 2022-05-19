const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/UserSchema');

const protect = asyncHandler(async (req, res, next) => { // Esto se envía en los headers.
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]; // Es para separar el string "Bearer" del token 

            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token 
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }catch (error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, not token');
    }
});

module.exports = { protect }