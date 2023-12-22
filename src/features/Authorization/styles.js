import { StyleSheet } from "react-native";
import { getHP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    header: {
      padding: getHP(1),
      backgroundColor: "#880e4f",
    
    },
    scrollView:{
        backgroundColor: "#ffffff",
    },
    title: {
      fontSize: 20,
      fontWeight: "600",
      color:"#fff",
      
    },
    body: {
      padding: getHP(2),
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      color:"#000",
      fontWeight: "400",
    },
    value: {
      fontSize: 16,
      fontWeight: "600",
      color:"#fff"
    },
    titleDays: {
      padding: getHP(2),
      backgroundColor: "#fff",
      fontSize: 16,
      fontWeight: "600",
      color: "#fff",
    },
    text: {
      fontSize: 18,
      fontWeight: "600",
      
    },
    day: {
      padding: getHP(2),
    },
    dayLabel: {
      fontSize: 16,
      fontWeight: "400",
      paddingBottom:getHP(1)
    },
    dayValue: {
      fontSize: 16,
      fontWeight: "600",
    },
  });