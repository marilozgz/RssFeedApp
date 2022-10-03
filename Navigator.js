import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import  HomeScreen  from "./src/screens/HomePage";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StackNavigator = createNativeStackNavigator();

function Stack () {
   

  return (
    <StackNavigator.Navigator
    initialRouteName="Stack"
>
    <StackNavigator.Screen
        name="RSS Feed App"
        component={HomeScreen}
    />
  
</StackNavigator.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function Tabs() {
    const items = useSelector(state => state.feedReducer.items);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (items.items) {
            setCount(items.items.length);
            setLoading(false);
        }
    }, [items.items]);

  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveTintColor: 'blue'
    }}
>
    <Tab.Screen
        name="Home"
        component={Stack}
        options={{
            tabBarLabel: 'Rss Feed',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={30} color={color} />
            ),
           
            
            headerShown: false
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
    )
}