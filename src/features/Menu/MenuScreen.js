import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import LogOut from '../../../assets/LogOut.svg'
import { useMenuController } from './useMenuController';


const MenuScreen = () => {

  const {handleLogOut} = useMenuController()

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.itemContainer} onPress={handleLogOut}>

        <View style={styles.ContentItemContainer}>

          <Text style={styles.textItemContainer}>Salir</Text>


          <LogOut style={styles.iconItemContainer} />

        </View>

      </TouchableOpacity>

    </View>
  )
}

export default MenuScreen