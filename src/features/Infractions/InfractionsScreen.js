import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { useInfractionsController } from './useInfractionsController';

const InfractionsScreen = () => {

  const { handleInfractionList } = useInfractionsController()

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleInfractionList}>

        <Text>InfractionsScreen</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} >

        <View style={styles.ContentItemContainer}>

          <Text style={styles.textItemContainer}>Infraccion</Text>
          <Text style={styles.textItemContainer}>Data de Infraccion</Text>

        </View>

      </TouchableOpacity>

    </View>
  )
}

export default InfractionsScreen