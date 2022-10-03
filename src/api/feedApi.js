import * as rssParser from 'react-native-rss-parser';
 


export const getRss = (action) => {
    return new Promise((resolve, reject) => {
        fetch(action.payload)
        .then((response) => response.text())
        .then((responseData) => {
            rssParser.parse(responseData)
            .then((rss) => {
                resolve(rss);
            })
           
        })

        .catch((error) => {
            reject(error);
        })
    }
)}