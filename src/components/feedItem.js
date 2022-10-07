import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageFromHtmlFeed, formatHTML } from "../utils/utils";
import {styles} from "./feedItem-styles.js";

const FeedItem = ({ item }) => {
  const navigation = useNavigation();
  let image = "";

  //We are using the imageFromHtmlFeed function to get the image from the html content because the rss feed does not provide the image url
  //in some cases the RSS doesn't provide the standar tag with the image in enclosure, so we need to get the image from the html content
  item.enclosures.length > 0 ? (image = item.enclosures[0].url) : (image = imageFromHtmlFeed(item.content));
   
  const description = formatHTML(item.description);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeedItem;
