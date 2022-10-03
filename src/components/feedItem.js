import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"

import {AppRegistry} from 'react-native';
import {imageFromHtmlFeed} from "../utils/utils";

const FeedItem = ({item}) => {

    const img = imageFromHtmlFeed(item.description);
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{uri: img}}/>
             <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                
            </View>
        </View>
    )
}


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
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
        marginTop: 10,
    }
})

export default FeedItem;