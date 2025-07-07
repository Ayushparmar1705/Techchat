export const messages = {
    getUsers: async (token) => {
        
        const URL = `http://localhost:8080/get/user/${token}`;
        const data = await fetch(URL);
        const result = await data.json();
        return result.message;
    },



    sendMessage: async (sender_id, reciver_id, message) => {
        const URL = 'http://localhost:8080/send/message';
        const data = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sender_id, reciver_id, message }),
        })
        const result = await data.json();
        return result;
    }
}
