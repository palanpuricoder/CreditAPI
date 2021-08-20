const User = require('../model/user');
const bcrypt = require("bcrypt");

module.exports = {
    async login(req,res){
        try{
            const user = await User.findOne({email : req.body.email});
            if (!user) {
                res.status(400).send({error : "Email is wrong"})
            }

            res.send({user , message : "Login successfully"})
        }catch(err){
            return res.status(500).send(err.message)
        }
    },
    //get all user 
    async getUser(req,res){
    try{
        const getUser = await user.findById();
        res.send({getUser});
      }catch(err){
        return res.status(500).send(err.message);
      }
    },

    // create user 
    async register(req,res){
        try {
        console.log("body :::: ",req.body);
            // let checkAvailable = await User.findOne({email : req.body.email});
            // if (checkAvailable) {
            //     res.status(400).send({error : "Email is already available"})            
            // }
            console.log('munmun :::: ', checkAvailable);
            const savedUser = await User.create(req.body);
            res.send({error : null , data : savedUser});
        } catch (error) {
            res.status(400).json({error : 'api not save user record'})
        }
    }
}