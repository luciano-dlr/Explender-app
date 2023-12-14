import axios from "axios";

export default class AuthService {

    async postLogin(usuario) {  
        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Auth', usuario)
        return response.data
    }
}

 