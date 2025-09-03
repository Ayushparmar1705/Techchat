
export const messages = {

    getUsers: async (token) => {

    
        const URL = `https://techchat-hctq.onrender.com/get/user/${token}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result.message;
    },



    sendMessage: async (sender_id, reciver_id, message) => {
        const URL = 'https://techchat-hctq.onrender.com/messages/sendmessage';
        const data = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sender_id, reciver_id, message }),
        })
        const result = await data.json();
        return result;
    },

    getMessage: async (created_by, reciver_by) => {
        const URL = `https://techchat-hctq.onrender.com/messages/getmessage/${created_by}/${reciver_by}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    },

    Userprofile: async (token) => {
        const URL = `https://techchat-hctq.onrender.com/user-profile/${token}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    },

    showFavouriteList : async (decodedToken) => {
        const URL = `https://techchat-hctq.onrender.com/get/favourites/${decodedToken}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    }


}
