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

    
    const navigation = useNavigation();

    return (
         <FlatList 
        data={items}
        renderItem={({item}) => <FeedItem item={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refresh}
        />
            
             
            
       
        
    )
}



export default HomeScreen;