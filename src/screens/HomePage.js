import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as rssParser from 'react-native-rss-parser';
import FeedItem from '../components/feedItem';
import useFeed from '../hooks/useFeed';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFeeds } from '../slices/feedSlice';
var rssv;
var title = "No title";
var items = "No items";

const HomeScreen = () => {

   const items = useSelector(state => state.feedReducer.items);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchFeeds('https://www.nasa.gov/rss/dyn/breaking_news.rss'));
    }, [dispatch]);

    const navigation = useNavigation();

    return (
     
        <FlatList
          data={items.items}
          renderItem={({ item }) => <FeedItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
     
    );
};
      


export default HomeScreen;