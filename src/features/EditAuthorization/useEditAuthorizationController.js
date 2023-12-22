import { View, Text } from 'react-native';
import React from 'react';
import { useUserStore } from '../../zustand/useUserStore';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostEditAuthorizations from '../../hooks/authorizations/usePostEditAuthorizations';

export const useEditAuthorizationController = () => {
  const token = useAuthStore((bolsa) => bolsa.userData?.token);
  const userInfo = useUserStore((bolsa) => bolsa.userInfo);

  const {post}= usePostEditAuthorizations()

  
  // console.log('soy el token del user', token);
  // console.log('soy user info', userInfo);


  //modificar la informacion en mi store para lograr consultarlo de manera local 

  const handleEditAuthorization = async () => {

    const data = {
      Codigo: "_6RD13S90Y",
      Tipo: "1",
      codGrupo: "_3P10MUYVJ",
      AutorizadoDesde: "2023-11-16",
      AutorizadoHasta: "2024-11-10",
      Autorizado: {
          Codigo: "",
          TipoDoc: "DNI",
          NroDoc: "99999997",
          Nombre: ""
      },
      Dias: [
          {
              Dia: "4",
              DesdeHora: "00:00",
              HastaHora: "23:59"
          },
          {
              Dia: "5",
              DesdeHora: "00:00",
              HastaHora: "23:59"
          },
          {
              Dia: "6",
              DesdeHora: "00:00",
              HastaHora: "23:59"
          },
          {
              Dia: "7",
              DesdeHora: "00:00",
              HastaHora: "23:59"
          },
          {
              Dia: "1",
              DesdeHora: "00:00",
              HastaHora: "01:59"
          }
      ],
      Autorizante: "_5SR13NAMU",
      codDestino: "TestLC"
  }

    post(data,token)
  };

  return {
    handleEditAuthorization,
  };
};
