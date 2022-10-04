import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { imageFromHtmlFeed, fullHtml } from "../../utils/utils";

//import moment to format the date of the feed allow to show the date in a more readable format and can be localized
import moment from "moment";
//import styles
import {styles} from "./FeedDetails-styles.js";

function FeedDetailScreen({ route }) {
  const { item } = route.params;
  //We are using the imageFromHtmlFeed function to get the image from the html content because the rss feed does not provide the image url
  //in some cases the RSS doesn't provide the standar tag with the image in enclosure, so we need to get the image from the html content
  let image = "";
  const description = fullHtml(item.description);
  if (item.enclousure > 0) {
    image = item.enclosure[0].url;
  } else {
    image = imageFromHtmlFeed(item.description);
  }
  //Navigate to the url of the feed in the browser
  const onPress = () => {
    const url = item.links[0].url;
    Linking.canOpenURL(url);
    Linking.openURL(url);
  };
  return (
    <ScrollView>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: `${image}` }} />
        <Text style={styles.date}>
          <Text style={styles.publishLabel}>Publish:</Text>
          {moment(item.published).format("YYYY-MM-DD")}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.link}>{item.link}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress} title="View more">
          <Text style={styles.buttonText}>View more</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default FeedDetailScreen;
