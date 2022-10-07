import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { fetchFeeds } from "./src/redux/slices/feedSlice";
import HomeScreen from "./src/screens/Home/HomePage";
import FeedDetailScreen from "./src/screens/FeedDetails/FeedDetailPage";
import ChooseRSS from "./src/screens/ChooseRSS/ChooseRSS";

const StackNavigator = createNativeStackNavigator();

function Stack() {
  // we use dispatch to call the action to get the data, and we use useEffect to call the action only once
  const dispatch = useDispatch();
  const urlfeed = useSelector((state) => state.url);
  useEffect(() => {
    dispatch(fetchFeeds(urlfeed || "https://www.9to5mac.com/feed/"));
  }, [dispatch, urlfeed]);

  return (
    <StackNavigator.Navigator initialRouteName="Stack">
      <StackNavigator.Screen name="RSS Feed App" component={HomeScreen} />
      <StackNavigator.Screen name="Details" component={FeedDetailScreen} />
      <StackNavigator.Screen name="Settings" component={ChooseRSS} />

    </StackNavigator.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Stack}
        options={{
          tabBarLabel: "Rss Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),

          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ChooseRSS}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

 
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
