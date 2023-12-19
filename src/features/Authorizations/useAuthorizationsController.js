import { useEffect, useState } from "react";
import useGetUserData from "../../hooks/user/useGetUserData";
import { useUserStore } from "../../zustand/useUserStore";
import { useAuthStore } from "../../zustand/useAuthStore";
import usePostAuthorizations from "../../hooks/authorizations/usePostAuthorizations";
import { useAuthorizationsStore } from "../../zustand/useAuthorizationsStore";

export const useAuthorizationsController = () => {

    const [authorizationsData, setAuthorizationsData] = useState([]);

    const token = useAuthStore((bolsa) => bolsa.userData?.token);
    const setUserInfo = useUserStore((bolsa) => bolsa.setUserInfo);
    const userInfo = useUserStore((bolsa) => bolsa.userInfo);
    
    

    const { userAuthorizationsList,setUserAuthorizationsList }= useAuthorizationsStore();

    const { get, data } = useGetUserData()

    const handleUserInfo = () => {

        get(token);
    };

    useEffect(() => {

        handleUserInfo()

    }, [])


    useEffect(() => {

        if (data) {
            setUserInfo(data)
            
        }

    }, [data])

    useEffect(() => {

        if (userInfo) {
            
            handleAuthorizationsList()
        }

    }, [userInfo])





    // console.log('soy data', userInfo.USUARIO[0].CODUSUARIO)
    // console.log('soy token', token)


    //To Do 
    //Ojo leio la fecha es muy importante en la app
    
   
    
    const { post,dataAuthorizations } = usePostAuthorizations()
    
    const handleAuthorizationsList = async () => {
        
        const data = {
            Codigo: "",
            Autorizante: userInfo.USUARIO[0].CODUSUARIO,
            AutorizadoHasta: "2023-11-15 00:00",
            FillInclNoVigente: false,
            Vigente: "2"
        }
        
        // const token = 'OId+4W1pNdohNngNV37g3QCK/pSkg1HNJHEiGVpSNaBTp76AGVCSWHTzLzYJzwh3J7fsSBOuRuONlyqyyApLZQOyFhekth5J9meo4Rx+TGyf6kxAucqWdN4VDMnSKAqVCs2AMndgm/CU12CIOkZJ6/kJk7r/NqWQpv7UCThAh9MjRUocZS+iRhHEKrI4pDfY06wNQvmrEDJwrO0bNXLwGbqY95Deeyv77MXLORffEg7AuIi5vgmB59ZpLUoWCzISszZBE0TIXrJj8gAT91qvQqUIbHiJPEFKcLJZgCU+7MWXb11gSAJl0VX42MVuzZ2HeSGWkGyaAh3p8w/Fuvfe5KDqqbNygUXfa7ArB6cpxUuBgi9jUDVd7OHVxiAtVg4+cljo1j9xNXOIaPPUx0o4yMljANUHyXznb8OIbEsxSpRZ6pRLc11cta3NDbTfyhdFK6JBUxRrCF8='
        
        
        post(data, token)
        
        
        
        
    };
    
    
    useEffect(() => {
        
        if(dataAuthorizations){
            //guardando en la bolsa
            setUserAuthorizationsList(dataAuthorizations)
            
        }

    }, [dataAuthorizations])

    useEffect(() => {
      
    console.log('soy la lista de autorizations',userAuthorizationsList)
     
    }, [userAuthorizationsList])
    

    













    //objeto a enviar para tener listado de auth
    // Usuario test
    //En headers mandar token 

    //token
    //OId+4W1pNdohNngNV37g3QCK/pSkg1HNJHEiGVpSNaBTp76AGVCSWHTzLzYJzwh3J7fsSBOuRuONlyqyyApLZQOyFhekth5J9meo4Rx+TGyf6kxAucqWdN4VDMnSKAqVCs2AMndgm/CU12CIOkZJ6/kJk7r/NqWQpv7UCThAh9MjRUocZS+iRhHEKrI4pDfY06wNQvmrEDJwrO0bNXLwGbqY95Deeyv77MXLORffEg7AuIi5vgmB59ZpLUoWCzISszZBE0TIXrJj8gAT91qvQqUIbHiJPEFKcLJZgCU+7MWXb11gSAJl0VX42MVuzZ2HeSGWkGyaAh3p8w/Fuvfe5KDqqbNygUXfa7ArB6cpxUuBgi9jUDVd7OHVxiAtVg4+cljo1j9xNXMsqdkhIASMEKfFa6TswL/OGCt1mc5gDJeDI6VZrIxZrNvooKCh4mtTqvGq/FsQjLs=

    // {
    //   "Codigo": "",
    //   "Autorizante": "_5SR13NAMU",
    //   "AutorizadoHasta": "2023-11-15 00:00",
    //   "FillInclNoVigente": false,
    //   "Vigente": "2"
    // }


    // respuesta del back 

    //   const setUserData = useAuthStore((state) => state.setUserData);


    return {
        authorizationsData,
        setAuthorizationsData,
        get,
        handleUserInfo,
        userInfo,
        handleAuthorizationsList,
        userAuthorizationsList


    }
}

