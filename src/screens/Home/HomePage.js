import React, {  useState, useEffect } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeeds, searchByName } from "../../slices/feedSlice";

//Import other components
import FeedItem from "../../components/feedItem";

//Import styles
import {styles} from "./HomePage-styles.js";

const HomeScreen = () => {
  const items = useSelector((state) => state.feedReducer.items);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeeds("https://www.9to5mac.com/feed/"));
  }, [dispatch]);

  //Searchbar created with TextInput component
  //searchByName action to filter the items
  
  return (
    <View>
      <View style={styles.searchbarContainer}>
        <TextInput
          placeholder="Search Here..."
          onChangeText={(text) => dispatch(searchByName(text))}
          defaultValue={search}
          style={styles.searchbar}
        />
      </View>

      <FlatList
        data={items.filteredItems ? items.filteredItems : items.items}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



export default HomeScreen;
