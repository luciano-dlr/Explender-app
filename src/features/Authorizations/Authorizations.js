import { View, Text } from 'react-native'
import { useState } from 'react';
import { userStoreZustand } from '../../zustand/useAuthStore';
import { TextInput } from 'react-native-gesture-handler';

const Authorizations = () => {

  console.log(userStoreZustand)

 
  return (
    <View>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      <Text>Authorizations list</Text>
      
      <Text>Authorizations list</Text>
      
    </View>
  )
}

export default Authorizations