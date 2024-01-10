import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useInfractionsController } from './useInfractionsController';


const InfractionsScreen = () => {

  const {handleInfractionList} = useInfractionsController()


  return (
    <View>
      <TouchableOpacity onPress={handleInfractionList}>

      <Text>InfractionsScreen</Text>

      </TouchableOpacity>
    </View>
  )
}

export default InfractionsScreen