// in model we can write logic for working with the api
export const login = {
    Loginuser : async(loginData)=>{
        const URL = "http://localhost:8080/auth/login";
        const data = await fetch(URL,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(loginData),
        });
        const result = await data.json();
        return result;
    }
}