import usePostInfractionsList from "../../hooks/infractions/usePostInfractionsList";

import { useUserStore } from "../../zustand/useUserStore";


export const useInfractionsController = () => {

    const {post} = usePostInfractionsList()

    const { userInfo } = useUserStore()

    // console.log(JSON.stringify(userInfo,null,4))
    // console.log('soy la data',userInfo.USUARIO[0].USUNOMBRE)


    //To Do 
    //Hace boton logout boludo 
    // console.log(userInfo.USUARIO[0].USUNOMBRE);


    //Backend Dame el base64 directamente gg

    const handleInfractionList = () => {
        
        const data = {
            Fecha: "2023-10-12 00:00",
            Responsable: userInfo.USUARIO[0].USUNOMBRE,
            PorDestino: "1"
        };

        post(data)

    };

    

  return {

    handleInfractionList
    
  }

}

