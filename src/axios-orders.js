import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-cff19.firebaseio.com/'
});

export default instance;