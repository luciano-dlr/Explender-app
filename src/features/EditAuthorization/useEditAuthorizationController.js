import { useUserStore } from '../../zustand/useUserStore';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostEditAuthorizations from '../../hooks/authorizations/usePostEditAuthorizations';
import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useAuthorizationsStore } from '../../zustand/useAuthorizationsStore';

export const useEditAuthorizationController = () => {

  const token = useAuthStore((bolsa) => bolsa.userData?.token);
  const setUserAuthorizationDays = useAuthorizationsStore((bolsa)=> bolsa.setUserAuthorizationDays)
  const selectedUserAuthorization = useAuthorizationsStore((bolsa)=> bolsa.selectedUserAuthorization)
  const setSelectedUserAuthorization = useAuthorizationsStore((bolsa)=> bolsa.setSelectedUserAuthorization)
  
 
 
  
  // console.log(JSON.stringify(authorization,null,4))

  const { post,data } = usePostEditAuthorizations()

  // const [authorizationEdit, setAuthorizationEdit] = useState(authorization)

  // const handleUseEditAuthorization = (field, value) => {

  //   setAuthorizationEdit((prevAuthorization) => {

  //     const newAuthorization = { ...prevAuthorization };
  //     return newAuthorization;

  //   });
  // };


  const [days,setDays] = useState(selectedUserAuthorization.DIAS)

  // console.log('soy dias',JSON.stringify(days,null,4))

  //MiniPeka Aniaaa
  const handleChangeDays = (day,value,context) => {

    setDays((prevState) => {

      const newState = prevState.map((item)=>{
        
          if(item.DIA === day)
          {
            if(context === 'from'){
              const newItem = {...item, DESDEHORA:value}

              return newItem

            }else{
              const newItem = {...item, HASTAHORA:value}

              return newItem

            }
          }
          return item
      })

      return newState
      
    } )
  }


  const handlePressSaveAuthorization = () => {

    post({ ...selectedUserAuthorization, DIAS:days }, token)

  }

  useEffect(() => {
    
    if(data){
      setUserAuthorizationDays(days,selectedUserAuthorization.CODIGO)
      setSelectedUserAuthorization({ ...selectedUserAuthorization, DIAS:days })
      console.log('soy user Authorization',selectedUserAuthorization);
    }
    
  }, [data])
  



  // const handleEditPostAuthorization = async () => {

  //   post(authorizationEdit, token)

  // };



  return {
    handleChangeDays,
    days,
    handlePressSaveAuthorization,
    selectedUserAuthorization
  };
};




    // const data = {
    //   Codigo: "_6RD13S90Y",
    //   Tipo: "1",
    //   codGrupo: "_3P10MUYVJ",
    //   AutorizadoDesde: "2023-11-16",
    //   AutorizadoHasta: "2024-11-10",
    //   Autorizado: {
    //     Codigo: "",
    //     TipoDoc: "DNI",
    //     NroDoc: "99999997",
    //     Nombre: ""
    //   },
    //   Dias: [
    //     {
    //       Dia: "4",
    //       DesdeHora: "02:00",
    //       HastaHora: "22:59"
    //     },
    //     {
    //       Dia: "5",
    //       DesdeHora: "02:00",
    //       HastaHora: "22:59"
    //     },
    //     {
    //       Dia: "6",
    //       DesdeHora: "02:00",
    //       HastaHora: "22:59"
    //     },
    //     {
    //       Dia: "7",
    //       DesdeHora: "02:00",
    //       HastaHora: "22:59"
    //     },
    //     {
    //       Dia: "1",
    //       DesdeHora: "02:00",
    //       HastaHora: "02:59"
    //     }
    //   ],
    //   Autorizante: "_5SR13NAMU",
    //   codDestino: "TestLC"
    // }
    

    //console.log de authorization route
    // {
    //   CODIGO: "_6RD13S90Y",
    //   DESCRIPCION: "TEST CIELOS ROCIO CIGARRAS",
    //   AUTORIZADODESDE: "2023-11-16",
    //   AUTORIZADOHASTA: "2024-11-10",
    //   AUTESTADO: "",
    //   CODESTADO: "1",
    //   ESTADO: "AUTORIZADA",
    //   ESTADOLABEL: "AUTORIZADA",
    //   CODESTADOORIGEN: "1",
    //   ESTADOORIGEN: "AUTORIZADA",
    //   CODAUTORIZACIONTIPO: "1",
    //   AUTORIZACIONTIPO: "Permanente",
    //   SUSPENSIONHASTA: "1900-01-01",
    //   CODMOTIVOSUSPENSION: "",
    //   MOTIVOSUSPENSION: "",
    //   CODUSUARIO: "_5SR13Q7PN",
    //   USUAUTORIZO: "Test Cielos Rocio Cigarras",
    //   CODGRUPO: "_3P10MUYVJ",
    //   GRUPO: "Visitas Permanentes",
    //   CODINGRESANTE: "_5SR13NAMU",
    //   TIPODOCINGRESANTE: "DNI",
    //   NRODOCINGRESANTE: "99999997",
    //   INGRESANTE: "Test Cielos Rocio Cigarras",
    //   CODAUTORIZANTE: "_5SR13NAMU",
    //   TIPODOCAUTORIZANTE: "DNI",
    //   NRODOCAUTORIZANTE: "99999997",
    //   AUTORIZANTE: "Test Cielos Rocio Cigarras",
    //   CODDESTINO: "TestLC",
    //   DESTINO: "Get Hotel",
    //   MANZANA: "1000",
    //   LOTE: "1000",
    //   ORIGEN: "MOBILE",
    //   CANTIDADPERMITIDA: "0",
    //   CANTIDADACTUAL: "3",
    //   DIAS: [
    //     {
    //       AUTORIZACION: "_6RD13S90Y",
    //       CODIGO: "51EFE6DF-F",
    //       DIA: "4",
    //       DESCRIPDIA: "Miercoles",
    //       DESDEHORA: "2.00",
    //       HASTAHORA: "22.59",
    //       DESDEHORA2: "1900-01-01 02:00",
    //       HASTAHORA2: "1900-01-01 22:59"
    //     },
    //     {
    //       AUTORIZACION: "_6RD13S90Y",
    //       CODIGO: "B141244A-6",
    //       DIA: "1",
    //       DESCRIPDIA: "Domingo",
    //       DESDEHORA: "2.00",
    //       HASTAHORA: "2.59",
    //       DESDEHORA2: "1900-01-01 02:00",
    //       HASTAHORA2: "1900-01-01 02:59"
    //     },
    //     {
    //       AUTORIZACION: "_6RD13S90Y",
    //       CODIGO: "834286E1-6",
    //       DIA: "7",
    //       DESCRIPDIA: "Sabado",
    //       DESDEHORA: "2.00",
    //       HASTAHORA: "22.59",
    //       DESDEHORA2: "1900-01-01 02:00",
    //       HASTAHORA2: "1900-01-01 22:59"
    //     },
    //     {
    //       AUTORIZACION: "_6RD13S90Y",
    //       CODIGO: "0F5B9F17-C",
    //       DIA: "5",
    //       DESCRIPDIA: "Jueves",
    //       DESDEHORA: "2.00",
    //       HASTAHORA: "22.59",
    //       DESDEHORA2: "1900-01-01 02:00",
    //       HASTAHORA2: "1900-01-01 22:59"
    //     },
    //     {
    //       AUTORIZACION: "_6RD13S90Y",
    //       CODIGO: "76B45B44-D",
    //       DIA: "6",
    //       DESCRIPDIA: "Viernes",
    //       DESDEHORA: "2.00",
    //       HASTAHORA: "22.59",
    //       DESDEHORA2: "1900-01-01 02:00",
    //       HASTAHORA2: "1900-01-01 22:59"
    //     }
    //   ],
    //   Autorizante: "_5SR13NAMU",
    //   codDestino: "TestLC"
    // }
