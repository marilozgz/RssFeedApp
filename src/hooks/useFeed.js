import { useState, useEffect, useCallback } from "react";
import * as rssParser from "react-native-rss-parser";
import FeedItem from "../components/feedItem";

function useFeed(feed) {
    const [{isRefreshing, refreshItem,items}, setFeed] = useState({
        isRefreshing: true,
        refreshItem: null,
        items: []
    })

    const refresh = useCallback(() => {
        setFeed((state) => ({
            ...state,
            isRefreshing: true,
            refreshItem: state.refreshItem+1
        }))
    }, [])

    useEffect(() => {
            fetch(feed)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {

             setFeed((state) => ({
                ...state,
                isRefreshing: false,
                items: rss.items
            }))

            });


    
}
, [])

    return {items, refresh, isRefreshing}
}

export default useFeed;
     

