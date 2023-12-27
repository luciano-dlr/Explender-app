import axios from "axios";

export default class AuthorizationsService {

    async getAuthorizationList(data, token) {
        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Autorizacion', data, {
            headers:{
                "token": token,
            }
        });
        return response.data;
    }

    async createNewAuthorization(data, token) {

    

        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Autorizacion/New', data, {
            headers:{ 
                "token": token
            }
        });
        return response.data;
    }
}