
# Rss Feed App

React Native app, with redux-toolkit to handle global state, and redux-saga to handle async execution flow.
The app is provided with a url from a RSS source, but can be canged to others.
Since navigation, you can see the last feed, search by title or view more info in your browser.
The app is functional on iOS and Android.






## External Libreries

**Redux-toolkit:** use to improve global state managment.  
**Redux-Saga:** Handle async flow. 
**React-Native-RSS-Parser:** To parse in a easy way the RSS feed, because not all of them
have the same format or standars. Improving the parse work and getting better results.
**Moment.js:** To convert datatimes in the desired format and allowed this to be localed to improve app could be use in other zones.


##  Arquitecture

All the app has been distributed in small components, using state, Hooks,

## Install

To run the app you first need to install all the dependencies with

`npm install`

And then 

`npm start`

The app is based runnin with expo to test it, so this will be the necesary app in your phone 
to try it

**Android Expo App**.  
https://play.google.com/store/apps/details?id=host.exp.exponent&gl=US

**iOS Expo App**.  
https://apps.apple.com/us/app/expo-go/id982107779
