import { StyleSheet } from "react-native";
import { getHP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // touchable: {
    //   marginTop: 20,
    //   padding: 10,
    //   backgroundColor: 'lightblue',
    //   borderRadius: 5,
    // },
    // modalContainer: {
    //     flex: 1,
    //     justifyContent: 'space-around', 
    //     alignItems: 'center',
        
    // },
    // modalContent: {
    //     backgroundColor: 'white',
    //     padding: 20,
    //     borderRadius: 10,
        
    // },
    scrollView: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
        flex: 1,
    height: getHP(90),
    backgroundColor: "#fff",
  },
  itemContainer: {
      padding: getHP(1),
      backgroundColor: '#880e4f',
      margin: getHP(1),
      borderRadius: 7,
  },
  ContentItemContainer:{
      
  },
  textItemContainer:{
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
      textAlign: "justify",
  },
  iconItemContainer:{
      color: 'black'
  }
  });
  