import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { useAuthorizationsStore } from '../../zustand/useAuthorizationsStore';

export const useAuthorizationsController = () => {
  // const route = useRoute();
  // const { authorization } = route.params;
  const { navigate } = useNavigation();
  const selectedUserAuthorization = useAuthorizationsStore((bolsa)=> bolsa.selectedUserAuthorization)

  const memorizedAuthorization = useMemo(() => {

    // console.log('soy selectedUserAuthorization',selectedUserAuthorization);

    return selectedUserAuthorization

  }, [selectedUserAuthorization])

  

  const handlePressEditAuthorization = () => {
    navigate('Editar Autorizacion');
  };



  // // efine el orden personalizado de los días
  // const customDaysOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // // Verifica que authorization.DIAS no sea undefined o null
  // const dias = authorization.DIAS || [];

  // // Utiliza el estado para almacenar los días ordenados
  // const [sortedDias, setSortedDias] = useState([]);

  // useEffect(() => {
  //   // Crea una copia del array antes de ordenarlo para evitar la mutabilidad
  //   const sortedDias = [...dias].sort((a, b) => {
  //     // Convierte "DIA" a número antes de realizar la comparación
  //     const dayA = parseInt(a.DIA, 10);
  //     const dayB = parseInt(b.DIA, 10);

  //     const dayOrderA = customDaysOrder.indexOf(a.DESCRIPDIA);
  //     const dayOrderB = customDaysOrder.indexOf(b.DESCRIPDIA);

  //     // Ordena primero por día y luego por el orden personalizado
  //     return dayA - dayB || dayOrderA - dayOrderB;
  //   });
  //   // Actualiza el estado con los días ordenados
  //   setSortedDias(sortedDias);
  // }, [dias]);

  return {
    handlePressEditAuthorization,
    memorizedAuthorization,
  };
}
