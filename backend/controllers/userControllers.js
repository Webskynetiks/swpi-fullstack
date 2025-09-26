const userModel = require("../models/userModel")

//get All Users
exports.getAllUsers = async( req,res) =>{
    try {
        const users = await userModel.find({}).select('-password');  
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "all users list",
            users,
        }) 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "error in get all users callback",
            success: false,
            error: error.message
        })
    }
};



