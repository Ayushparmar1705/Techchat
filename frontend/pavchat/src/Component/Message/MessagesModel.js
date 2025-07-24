import { useState } from "react";

export const messages = {

    getUsers: async (token) => {

    
        const URL = `http://localhost:8080/get/user/${token}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result.message;
    },



    sendMessage: async (sender_id, reciver_id, message) => {
        const URL = 'http://localhost:8080/messages/sendmessage';
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
        const URL = `http://localhost:8080/messages/getmessage/${created_by}/${reciver_by}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    },

    Userprofile: async (token) => {
        const URL = `http://localhost:8080/user-profile/${token}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    },

    showFavouriteList : async (decodedToken) => {
        console.log("fsv 2 decoded  =", decodedToken);
        const URL = `http://localhost:8080/get/favourites/${decodedToken}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result;
    }


}
