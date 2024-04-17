
import { useState } from "react"

const usePostEntries = () => {

    const [dataEntries, setDataEntries] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    //Iniciar la clase
    // const getAuthorizationList = new AuthorizationsService();

    const post = async (data, token) => {

        try {

            setIsLoading(true)
            // console.log('entro el servicio')
            // const response = await getAuthorizationList.getAuthorizationList(data, token);
            // setDataAuthorizations(response)
            // console.log('soy response',response)


        } catch (err) {
            setError(error);
        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        dataAuthorizations,
        isLoading,
        error,
        post
    }

}

export default usePostEntries