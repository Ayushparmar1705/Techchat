const getFavourites = require("../../Model/ShowFavourite/ShowFavouriteModel");
const ShowFavourite = (req,res)=>{
    const user_id = req.params;
    getFavourites(user_id , (err,result)=>{
        if(err){
            return res.status(500).send({message : err})
        }
        else{
            return res.status(200).send({message : result});
        }
    })
}
export default ShowFavourite;