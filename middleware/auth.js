const jwt = require('jsonwebtoken');

const config = require("config");
const auth = (req, res, next) => {
  //Get token from header

  const token = req.header("x-auth-token");
  console.log('here, ', token)
  //Check if there is no token
  if (!token) {
    return res.status(400).json({ message: "no token , authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log('decoded', decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "token is not valid" });
  }
};

module.exports = auth;
