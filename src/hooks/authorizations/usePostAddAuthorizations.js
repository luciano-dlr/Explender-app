import AuthorizationsService from "../../services/authorizations/authorizations.service"
import { useState } from "react"

const usePostAuthorizations = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

   
    const createNewAuthorization = new AuthorizationsService()

    const post = async (data, token) => {

        try {

            setIsLoading(true)
            const response = await createNewAuthorization.createNewAuthorization(data, token);
            setData(response)

        } catch (err) {
            setError(error);
        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        data,
        isLoading,
        error,
        post
    }

}

export default usePostAuthorizations