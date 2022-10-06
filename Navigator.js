import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/Home/HomePage";
import FeedDetailScreen from "./src/screens/FeedDetails/FeedDetailPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { fetchFeeds } from "./src/redux/slices/feedSlice";
const StackNavigator = createNativeStackNavigator();

function Stack() {
  // we use dispatch to call the action, and we use useEffect to call the action only once
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeeds("https://www.9to5mac.com/feed/"));
  }, [dispatch]);

  return (
    <StackNavigator.Navigator initialRouteName="Stack">
      <StackNavigator.Screen name="RSS Feed App" component={HomeScreen} />
      <StackNavigator.Screen name="Details" component={FeedDetailScreen} />
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
