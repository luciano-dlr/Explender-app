import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostEntries from '../../hooks/entries/usePostEntries'; 


export const useEntriesController = () => {

  const token = useAuthStore((bolsa) => bolsa.userData?.token);
  const { post, dataEntries,isLoading } = usePostEntries(); 

  

  const handleEntriesList = async () => {

    const data = {
      Autorizado: "",
      FechaDesde: "2024-04-01 00:00",
      FechaHasta: "2024-04-24 00:00",
      Autorizante: "_5SR13NAMU",
      Grupo: ""
    }
    post(data, token);
  };

  useEffect(() => {

    handleEntriesList()
   
  }, [])
  



  return {
    dataEntries,
    isLoading,
  }
}