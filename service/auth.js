const jwt = require('jsonwebtoken');
const secret = "Samriddhi#1234";
function setUser(user){
  return jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role,
  },
  secret);
}
function getUser(token){
  if(!token) return null;
  return jwt.verify(token, secret);
  try{
    return jwt.verify(token, secret);
  } catch (error){
    return null;
  }
}

module.exports = {
    setUser,
    getUser,
}