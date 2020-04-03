const userService = require("../helpers/sevices/userService")


const registerUser = async (req, res) => {
    const body = req.swagger.params["body"].value;
    const data = await userService.registerUserService(body);
    if(data){
        res.json(data)
    }else{
        res.json({error:"mail already registerd"})
    }
}
const loginUser=async (req,res)=>{
    const body=req.swagger.params["body"].value;
    const data=await userService.loginUserService(body);
    if(data){
        res.json(data)
    }else{
        res.json({error:"email and password not correct"})
    }
}


module.exports = {
    registerUser,
    loginUser
}