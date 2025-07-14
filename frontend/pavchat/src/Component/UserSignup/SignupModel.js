export const Signupmodel = async (userdata) => {
    try {
        const URL = "http://localhost:8080/auth/signup";
        console.log("user data object = ",userdata);
        const data = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata),
        });
        const result = await data.json();
        return result;
    }
    catch (err) {
        console.log(err);
    }
}