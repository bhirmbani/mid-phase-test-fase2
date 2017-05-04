const jwt = require('jsonwebtoken');
require('dotenv').config()
const methods = {};

methods.auth = (req, res, next) => {
  if(req.headers.token === undefined) {
    res.send(`not authorized!`);
  } else {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
      if(decoded) {
        req.decoded = decoded;
        next();
      } else {
        res.send('unauthorized, need token to access');
      }
    });
  }
}

module.exports = methods;