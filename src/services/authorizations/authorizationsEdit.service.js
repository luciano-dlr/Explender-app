import axios from "axios";

export default class AuthorizationsEditService {


    
    async postEditAuthorization(data, token) {

    

        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Autorizacion/Edit', data, {
            headers:{ 
                "token": token
            }
        });
        return response.data;
    }
}