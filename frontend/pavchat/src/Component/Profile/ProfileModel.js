export const updateProfile = {
    update_profile: async (data1) => {
        const URL = "https://techchat-hctq.onrender.com/update/profile";
        const data = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.parse(data1),
        })
        const result = await data.json();
        return result.message;
    }
}