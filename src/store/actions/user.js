import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sign_in = createAsyncThunk('user/sign_in', async(payload) => {
    try {
        let {email, password} = payload

        const user = await axios
            .post("http://localhost:5000/api/user/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                console.log("Successfully logged in");
                return response.data.user
            })
            .catch ((error) => {
                if(error.response){
                    console.log(error.response.data.message);
                }
            });

        return {
            user : user,
        };
    }catch(e) {
        console.log(e.message);
    }    
});

const userActions = { sign_in };

export default userActions