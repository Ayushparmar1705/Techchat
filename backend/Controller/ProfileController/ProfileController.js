const profileQ = require("../../Model/ProfileModel/ProfileModel");
const myProfile = (req,res)=>{
    const token = req.params.token;
    profileQ.userProfile(token , (err,result)=>{
        if(err){
            return res.status(500).send({message:err})
        }else{
            return res.status(200).send({message:result});
        }
    })
}
module.exports = myProfile;