import axios from "axios";

const instance = axios.create({
    baseURL:'https://taskmanager-c8782-default-rtdb.firebaseio.com/'
});

export default instance;