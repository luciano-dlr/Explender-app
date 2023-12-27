import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNewAuthorizationController } from './useNewAuthorizationController'

const NewAuthorizationScreen = () => {

  const {handleNewAuthorizationPost} = useNewAuthorizationController()


  return (
    <ScrollView>
      <View>
        <View>
          <Text>NewAuthorizationScreen</Text>
        </View>
        <View>
          <TextInput value={'sere un estado'}/>
        </View>

      </View>
    </ScrollView>
  )
}

export default NewAuthorizationScreen