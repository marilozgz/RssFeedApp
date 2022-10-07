import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
  TextInput,
  TouchableHighlight,
} from "react-native";
//import styles
import { styles } from "./ChooseRSS-styles.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeUrl } from "../../redux/slices/feedSlice";

function ChooseRSS() {
  const [text, onChangeText] = useState("");
  const [pressed, setPressed] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);

  const onPress = () => {
    setPressed(true);
    dispatch(changeUrl(text));
    setMessage(" RSS changed successfully");
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Change RSS</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={text}
      ></TextInput>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={pressed ? styles.buttonPressed : styles.buttonNormal}
          onPress={onPress}
          title="Change"
        >
          <Text style={styles.buttonText}>Change</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
        <View style={styles.actualRSSContainer}>
          <Text style={styles.subtitle}>Actual RSS:</Text>
          <Text style={styles.actualRSSText}>{url}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default ChooseRSS;
