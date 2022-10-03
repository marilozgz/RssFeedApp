import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as rssParser from 'react-native-rss-parser';
import FeedItem from '../components/feedItem';
import useFeed from '../hooks/useFeed';
var rssv;
var title = "No title";
var items = "No items";

const HomeScreen = () => {
    const { items, refresh, isRefreshing } = useFeed(
        "http://feeds.weblogssl.com/xatakandroid"
      );

      console.log(items);
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('http://www.9to5mac.com/feed/')
    //         .then((response) => response.text())
    //         .then((responseData) => rssParser.parse(responseData))
    //         .then((rss) => {

    //             setData(rss);
    //             rss.items.forEach(item => {
    //                 console.log('');
    //             });

    //         });
    // }, []);

    const navigation = useNavigation();

    return (
         <FlatList 
        data={items}
        renderItem={({item}) => <FeedItem item={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refresh}
        />
            
             
            
        // </FlatList>
        
    )
}



export default HomeScreen;