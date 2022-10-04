import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  imageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "stretch",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
  },
});
