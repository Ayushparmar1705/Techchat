export const AddFavourite = async(createdBy, fav_per_id)=>{
    console.log("Fav api call = ",createdBy , fav_per_id);
    const URL = `http://localhost:8080/add/favourite`;
    const data = await fetch(URL,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({createdBy , fav_per_id}),
    });
    const result = await data.json();
    return result;
}
export const removeFavourite = async(fav_per_id) => {
    const URL = `http://localhost:8080/remove/favourite/${fav_per_id}`;
    const data = await fetch(URL);
    const result = await data.json();
    return result.message;
    
}