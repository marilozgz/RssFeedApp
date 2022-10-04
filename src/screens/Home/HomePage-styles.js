import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    searchbarContainer: {
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    searchbar: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
  
  });