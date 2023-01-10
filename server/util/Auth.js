const jwt = require('jsonwebtoken')
const CheckAuthentication = async (req, res, next) => {
   try {
    const token = req.headers.authorization;
    const deCodeToken = await jwt.verify(token, process.env.SECRET)
    req.user = deCodeToken
    next()
   } catch (error) {
    res.status(401).json({ error : "Authentication Failed!"})
   }
}

module.exports = CheckAuthentication;