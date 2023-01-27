// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User, Spot, Booking, Review, ReviewImage, SpotImage, sequelize } = require('../db/models');


const { secret, expiresIn } = jwtConfig;


// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
    // Create the token.
    const token = jwt.sign(
      { data: user.toSafeObject() },
      secret,
      { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );
  
    const isProduction = process.env.NODE_ENV === "production";
  
    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax"
    });
  
    return token;
  };


  const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;
  
    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
      if (err) {
        return next();
      }
  
      try {
        const { id } = jwtPayload.data;
        req.user = await User.scope('currentUser').findByPk(id);
      } catch (e) {
        res.clearCookie('token');
        return next();
      }
  
      if (!req.user) res.clearCookie('token');
  
      return next();
    });
  };
  

  // If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();
  
    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = ['Authentication required'];
    err.status = 401;
    return next(err);
  }

  
  
  // Authorization function to keep code droyyyy
  
  const ownerAuthorization = async (req, res, next) => {
    let spot = await Spot.findByPk(req.params.spotId);
    if (spot.ownerId !== req.user.id) {
      res.statusCode = 403;
      return res.json({
        message: "Forbidden",
        statusCode: 403,
      });
    }
  };
  
  const homeless = async (req, res, next) => {
    let spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
      let err = {};
      err.message = "Spot couldn't be found";
      err.status = 404;
      return next(err);
    }
  };
  
  module.exports = { setTokenCookie, restoreUser, requireAuth, ownerAuthorization, homeless };
