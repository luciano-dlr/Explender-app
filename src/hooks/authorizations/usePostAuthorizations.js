import AuthorizationsService from "../../services/authorizations/authorizations.service"
import { useState } from "react"

const usePostAuthorizations = () => {

    const [dataAuthorizations, setDataAuthorizations] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getAuthorizationList = new AuthorizationsService();

    const post = async (data, token) => {

        try {

            setIsLoading(true)
            // console.log('entro el servicio')
            const response = await getAuthorizationList.getAuthorizationList(data, token);
            setDataAuthorizations(response)
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

export default usePostAuthorizations