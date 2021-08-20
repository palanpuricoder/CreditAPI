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

    // create user 
    async register(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}