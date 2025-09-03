const removeFavourite = require("../../Model/RemoveFavourite/RemoveFavouriteModel");


const removefavourite = (req,res)=>{
    const id = req.params;
    removeFavourite(id,(err,result)=>{
        if(err){
            return res.status(500).send({message : err});
        }else{
            return res.status(200).send({message : result});
        }
    });

}

module.exports = removefavourite