const jwt = require('jsonwebtoken');
const secret = "shhhhh"

const generateToken = () => {
    const token = jwt.sign({userName:"riya"},secret)
    console.log(token)
    return token
}
module.exports = {
    generateToken
}