import React, { useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {  searchByName } from "../../redux/slices/feedSlice";

//Import other components
import FeedItem from "../../components/feedItem";

//Import styles
import { styles } from "./HomePage-styles.js";

const HomeScreen = () => {
  const items = useSelector((state) => state.items);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

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
