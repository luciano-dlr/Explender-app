import { useState } from "react"
import AuthorizationsService from "../../services/authorizations/authorizations.service"

const usePostAuthorizations = () => {

    const [dataAuthorizations, setDataAuthorizations] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const authorizationsService = new AuthorizationsService();

    const post = async (data, token) => {

        try {
            setIsLoading(true)
            const response = await authorizationsService.postAuthorization(data, token);
            setDataAuthorizations(response)
    
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