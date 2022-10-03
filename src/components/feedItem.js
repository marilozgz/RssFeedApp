import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { AppRegistry } from "react-native";
import {  formatHTML } from "../utils/utils";

const FeedItem = ({ item }) => {
  const img =  item.enclosures[0].url;
  const description = formatHTML(item.description);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: img }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FeedItem;
