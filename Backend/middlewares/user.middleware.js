const jwt = require("jsonwebtoken");

module.exports.userExist = async (req, res)=>{
    const token = jwt.verify(req.cookies.token);
    if(!token){
        return res.status(401).json({message : "Something Went Wrong"});
    }
}