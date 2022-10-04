import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  link: {
    fontSize: 15,
    color: "blue",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  publishLabel: {
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
    fontStyle: "italic",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 230,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
