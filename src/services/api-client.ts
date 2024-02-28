import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40506901de85452897bd584c472c9b27'
    }
})