import { useEffect, useState } from "react";
import useUserDataGet from "../../hooks/user/useUserDataGet";
import { useUserStore } from "../../zustand/useUserStore";
import { useAuthStore } from "../../zustand/useAuthStore";


export const useAuthorizationsController = () => {

    const [authorizationsData, setAuthorizationsData] = useState([]);

    const authStore = useAuthStore();
    const userData = authStore.userData;

    // console.log('soy user data', userData && userData.token);

       
      

      const {get} = useUserDataGet()

      const handleUserInfo = () => {
        const token = 'OId+4W1pNdohNngNV37g3QCK/pSkg1HNJHEiGVpSNaBTp76AGVCSWHTzLzYJzwh3J7fsSBOuRuONlyqyyApLZQOyFhekth5J9meo4Rx+TGyf6kxAucqWdN4VDMnSKAqVCs2AMndgm/CU12CIOkZJ6/kJk7r/NqWQpv7UCThAh9MjRUocZS+iRhHEKrI4pDfY06wNQvmrEDJwrO0bNXLwGbqY95Deeyv77MXLORffEg7AuIi5vgmB59ZpLUoWCzISszZBE0TIXrJj8gAT91qvQqUIbHiJPEFKcLJZgCU+7MWXb11gSAJl0VX42MVuzZ2HeSGWkGyaAh3p8w/Fuvfe5KDqqbNygUXfa7ArB6cpxUuBgi9jUDVd7OHVxiAtVg4+cljo1j9xNXMsqdkhIASMEKfFa6TswL/OGCt1mc5gDJeDI6VZrIxZrNvooKCh4mtTqvGq/FsQjLs=';
        console.log('handle userInfo con token', token);
        get(token);
      };
      

     

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
      
      const authorizationsSimulate = {
        "AUTORIZACIONES": [
            {
                "CODIGO": "_6RP13D443",
                "DESCRIPCION": "REYES ALEXIS",
                "AUTORIZADODESDE": "2023-11-28",
                "AUTORIZADOHASTA": "2024-11-22",
                "AUTESTADO": "",
                "CODESTADO": "1",
                "ESTADO": "AUTORIZADA",
                "ESTADOLABEL": "AUTORIZADA",
                "CODESTADOORIGEN": "1",
                "ESTADOORIGEN": "AUTORIZADA",
                "CODAUTORIZACIONTIPO": "1",
                "AUTORIZACIONTIPO": "Permanente",
                "SUSPENSIONHASTA": "1900-01-01",
                "CODMOTIVOSUSPENSION": "",
                "MOTIVOSUSPENSION": "",
                "CODUSUARIO": "_5SR13Q7PN",
                "USUAUTORIZO": "Test Cielos Rocio Cigarras",
                "CODGRUPO": "_5FI0TYF3M",
                "GRUPO": "Transporte Escolar",
                "CODINGRESANTE": "28656424",
                "TIPODOCINGRESANTE": "DNI",
                "NRODOCINGRESANTE": "28656424",
                "INGRESANTE": "Reyes Alexis",
                "CODAUTORIZANTE": "_5SR13NAMU",
                "TIPODOCAUTORIZANTE": "DNI",
                "NRODOCAUTORIZANTE": "99999997",
                "AUTORIZANTE": "Test Cielos Rocio Cigarras",
                "CODDESTINO": "TestLC",
                "DESTINO": "Get Hotel",
                "MANZANA": "1000",
                "LOTE": "1000",
                "ORIGEN": "MOBILE",
                "CANTIDADPERMITIDA": "0",
                "CANTIDADACTUAL": "1",
                "DIAS": [
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "54881F2A-8",
                        "DIA": "4",
                        "DESCRIPDIA": "Miercoles",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "20.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 20:00"
                    },
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "595E6491-8",
                        "DIA": "5",
                        "DESCRIPDIA": "Jueves",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "20.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 20:00"
                    },
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "352668FA-2",
                        "DIA": "2",
                        "DESCRIPDIA": "Lunes",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "20.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 20:00"
                    },
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "86BC742E-1",
                        "DIA": "3",
                        "DESCRIPDIA": "Martes",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "20.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 20:00"
                    },
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "0D83E7A4-D",
                        "DIA": "7",
                        "DESCRIPDIA": "Sabado",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "14.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 14:00"
                    },
                    {
                        "AUTORIZACION": "_6RP13D443",
                        "CODIGO": "4BBD538F-3",
                        "DIA": "6",
                        "DESCRIPDIA": "Viernes",
                        "DESDEHORA": "6.00",
                        "HASTAHORA": "20.00",
                        "DESDEHORA2": "1900-01-01 06:00",
                        "HASTAHORA2": "1900-01-01 20:00"
                    }
                ]
            },
            {
                "CODIGO": "_6RP116VTM",
                "DESCRIPCION": "REYES ALEXIS",
                "AUTORIZADODESDE": "2023-11-28",
                "AUTORIZADOHASTA": "2024-11-22",
                "AUTESTADO": "",
                "CODESTADO": "1",
                "ESTADO": "AUTORIZADA",
                "ESTADOLABEL": "AUTORIZADA",
                "CODESTADOORIGEN": "1",
                "ESTADOORIGEN": "AUTORIZADA",
                "CODAUTORIZACIONTIPO": "1",
                "AUTORIZACIONTIPO": "Permanente",
                "SUSPENSIONHASTA": "1900-01-01",
                "CODMOTIVOSUSPENSION": "",
                "MOTIVOSUSPENSION": "",
                "CODUSUARIO": "_5SR13Q7PN",
                "USUAUTORIZO": "Test Cielos Rocio Cigarras",
                "CODGRUPO": "_5FI0UOU4M",
                "GRUPO": "Veterinaria",
                "CODINGRESANTE": "28656424",
                "TIPODOCINGRESANTE": "DNI",
                "NRODOCINGRESANTE": "28656424",
                "INGRESANTE": "Reyes Alexis",
                "CODAUTORIZANTE": "_5SR13NAMU",
                "TIPODOCAUTORIZANTE": "DNI",
                "NRODOCAUTORIZANTE": "99999997",
                "AUTORIZANTE": "Test Cielos Rocio Cigarras",
                "CODDESTINO": "TestLC",
                "DESTINO": "Get Hotel",
                "MANZANA": "1000",
                "LOTE": "1000",
                "ORIGEN": "MOBILE",
                "CANTIDADPERMITIDA": "0",
                "CANTIDADACTUAL": "1",
                "DIAS": [
                    {
                        "AUTORIZACION": "_6RP116VTM",
                        "CODIGO": "217ED369-4",
                        "DIA": "2",
                        "DESCRIPDIA": "Lunes",
                        "DESDEHORA": "8.00",
                        "HASTAHORA": "19.00",
                        "DESDEHORA2": "1900-01-01 08:00",
                        "HASTAHORA2": "1900-01-01 19:00"
                    },
                    {
                        "AUTORIZACION": "_6RP116VTM",
                        "CODIGO": "CC2EB345-4",
                        "DIA": "4",
                        "DESCRIPDIA": "Miercoles",
                        "DESDEHORA": "8.00",
                        "HASTAHORA": "19.00",
                        "DESDEHORA2": "1900-01-01 08:00",
                        "HASTAHORA2": "1900-01-01 19:00"
                    },
                    {
                        "AUTORIZACION": "_6RP116VTM",
                        "CODIGO": "868321CA-B",
                        "DIA": "6",
                        "DESCRIPDIA": "Viernes",
                        "DESDEHORA": "8.00",
                        "HASTAHORA": "19.00",
                        "DESDEHORA2": "1900-01-01 08:00",
                        "HASTAHORA2": "1900-01-01 19:00"
                    }
                ]
            },
            {
                "CODIGO": "_6RD149DID",
                "DESCRIPCION": "TEST CIELOS ROCIO CIGARRAS",
                "AUTORIZADODESDE": "2023-11-16",
                "AUTORIZADOHASTA": "2024-11-10",
                "AUTESTADO": "",
                "CODESTADO": "1",
                "ESTADO": "AUTORIZADA",
                "ESTADOLABEL": "AUTORIZADA",
                "CODESTADOORIGEN": "1",
                "ESTADOORIGEN": "AUTORIZADA",
                "CODAUTORIZACIONTIPO": "1",
                "AUTORIZACIONTIPO": "Permanente",
                "SUSPENSIONHASTA": "1900-01-01",
                "CODMOTIVOSUSPENSION": "",
                "MOTIVOSUSPENSION": "",
                "CODUSUARIO": "_5SR13Q7PN",
                "USUAUTORIZO": "Test Cielos Rocio Cigarras",
                "CODGRUPO": "_3P10MUYVJ",
                "GRUPO": "Visitas Permanentes",
                "CODINGRESANTE": "_5SR13NAMU",
                "TIPODOCINGRESANTE": "DNI",
                "NRODOCINGRESANTE": "99999997",
                "INGRESANTE": "Test Cielos Rocio Cigarras",
                "CODAUTORIZANTE": "_5SR13NAMU",
                "TIPODOCAUTORIZANTE": "DNI",
                "NRODOCAUTORIZANTE": "99999997",
                "AUTORIZANTE": "Test Cielos Rocio Cigarras",
                "CODDESTINO": "TestLC",
                "DESTINO": "Get Hotel",
                "MANZANA": "1000",
                "LOTE": "1000",
                "ORIGEN": "MOBILE",
                "CANTIDADPERMITIDA": "0",
                "CANTIDADACTUAL": "2",
                "DIAS": [
                    {
                        "AUTORIZACION": "_6RD149DID",
                        "CODIGO": "7DE25747-B",
                        "DIA": "4",
                        "DESCRIPDIA": "Miercoles",
                        "DESDEHORA": "0.00",
                        "HASTAHORA": "23.59",
                        "DESDEHORA2": "1900-01-01 00:00",
                        "HASTAHORA2": "1900-01-01 23:59"
                    }
                ]
            },
            {
                "CODIGO": "_6RD13S90Y",
                "DESCRIPCION": "TEST CIELOS ROCIO CIGARRAS",
                "AUTORIZADODESDE": "2023-11-16",
                "AUTORIZADOHASTA": "2024-11-10",
                "AUTESTADO": "",
                "CODESTADO": "1",
                "ESTADO": "AUTORIZADA",
                "ESTADOLABEL": "AUTORIZADA",
                "CODESTADOORIGEN": "1",
                "ESTADOORIGEN": "AUTORIZADA",
                "CODAUTORIZACIONTIPO": "1",
                "AUTORIZACIONTIPO": "Permanente",
                "SUSPENSIONHASTA": "1900-01-01",
                "CODMOTIVOSUSPENSION": "",
                "MOTIVOSUSPENSION": "",
                "CODUSUARIO": "_5SR13Q7PN",
                "USUAUTORIZO": "Test Cielos Rocio Cigarras",
                "CODGRUPO": "_3P10MUYVJ",
                "GRUPO": "Visitas Permanentes",
                "CODINGRESANTE": "_5SR13NAMU",
                "TIPODOCINGRESANTE": "DNI",
                "NRODOCINGRESANTE": "99999997",
                "INGRESANTE": "Test Cielos Rocio Cigarras",
                "CODAUTORIZANTE": "_5SR13NAMU",
                "TIPODOCAUTORIZANTE": "DNI",
                "NRODOCAUTORIZANTE": "99999997",
                "AUTORIZANTE": "Test Cielos Rocio Cigarras",
                "CODDESTINO": "TestLC",
                "DESTINO": "Get Hotel",
                "MANZANA": "1000",
                "LOTE": "1000",
                "ORIGEN": "MOBILE",
                "CANTIDADPERMITIDA": "0",
                "CANTIDADACTUAL": "2",
                "DIAS": [
                    {
                        "AUTORIZACION": "_6RD13S90Y",
                        "CODIGO": "8E70C780-7",
                        "DIA": "1",
                        "DESCRIPDIA": "Domingo",
                        "DESDEHORA": "0.00",
                        "HASTAHORA": "23.59",
                        "DESDEHORA2": "1900-01-01 00:00",
                        "HASTAHORA2": "1900-01-01 23:59"
                    },
                    {
                        "AUTORIZACION": "_6RD13S90Y",
                        "CODIGO": "557734FE-1",
                        "DIA": "7",
                        "DESCRIPDIA": "Sabado",
                        "DESDEHORA": "0.00",
                        "HASTAHORA": "23.59",
                        "DESDEHORA2": "1900-01-01 00:00",
                        "HASTAHORA2": "1900-01-01 23:59"
                    },
                    {
                        "AUTORIZACION": "_6RD13S90Y",
                        "CODIGO": "D6371DB5-F",
                        "DIA": "6",
                        "DESCRIPDIA": "Viernes",
                        "DESDEHORA": "0.00",
                        "HASTAHORA": "23.59",
                        "DESDEHORA2": "1900-01-01 00:00",
                        "HASTAHORA2": "1900-01-01 23:59"
                    },
                    {
                        "AUTORIZACION": "_6RD13S90Y",
                        "CODIGO": "3DA8B988-1",
                        "DIA": "5",
                        "DESCRIPDIA": "Jueves",
                        "DESDEHORA": "0.00",
                        "HASTAHORA": "23.59",
                        "DESDEHORA2": "1900-01-01 00:00",
                        "HASTAHORA2": "1900-01-01 23:59"
                    }
                ]
            }
        ]
    }
      

  return {
    authorizationsSimulate,
    authorizationsData,
    setAuthorizationsData,
    get,
    handleUserInfo,
    
    
  }
}

