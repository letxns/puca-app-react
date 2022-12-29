import axios from "axios";

const formFetch = axios.create({
    baseURL: "https://puca-app-api.onrender.com/",
    //procurar melhor sobre as headers
    headers: {
        "Content-type": "application/json",
        Accept: "application/json; charset=utf-8"
    }
});

export default formFetch