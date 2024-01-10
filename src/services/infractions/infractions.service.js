import axios from "axios";

export default class infractionsService {

    async postInfraction(token, data) {
        console.log('entro el service');
        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Infraccion', data, {
            headers: {
                token
            }
        })



        // const response2 = response.data ? data : 'este usuario no tiene infractions'

        // console.log('soy response 2',response2);




        // if (response.status === 200) {
        //     return []
        // }
        // console.log(response)
        return response.data


    }

}