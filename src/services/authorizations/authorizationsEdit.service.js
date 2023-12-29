import axios from "axios";

export default class AuthorizationsEditService {



    async postEditAuthorization(data, token) {


        
        //Como manejar los errores en axios, para tener la respuesta del back 
        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Autorizacion/Edit', data, {
            headers: {
                "token": token
            }
        })
        // .catch(err)
        // {
        //     if (err) {
        //         console.log(response.data.Status);

        //     }
        // }

        return response.data;

    }
}