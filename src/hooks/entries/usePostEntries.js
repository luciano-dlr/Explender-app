
import { useState } from "react"
import EntriesService from "../../services/entries/entries.service"
// import { useEntriesStore } from "../../zustand/useEntriesStore"

const usePostEntries = () => {

    // const setEntriesList = useEntriesStore(state => state.setEntriesList);

    const [dataEntries, setDataEntries] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    //Iniciar la clase
    const getEntriesList = new EntriesService();

   

    const post = async (data, token) => {

        try {

            setIsLoading(true)
            console.log('entro el servicio entries')
            const response = await getEntriesList.getEntriesList(data, token);

            // setDataAuthorizations(response)
            setDataEntries(response)
           
            console.log('soy response',response)


        } catch (err) {
            setError(error);
        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        dataEntries,
        isLoading,
        error,
        post
    }

}

export default usePostEntries;

