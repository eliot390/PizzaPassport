import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import RestaurantListing from "../screens/RestaurantListing";
import RestaurantPage from "../screens/RestaurantPage";
import UserProfile from '../screens/UserProfile';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#b22222', tabBarInactiveTintColor: 'gray'}}>
      <Tab.Screen 
        name={'Welcome'} 
        component={WelcomeScreen} 
        options={{tabBarIcon: ({focused}) => <Ionicons name='pizza-outline' size={25} color={focused? '#b22222' : 'gray'} />}}/>
      <Tab.Screen 
        name={'Listing'} 
        component={RestaurantListing}
        options={{tabBarIcon: ({focused}) => <Feather name='list' size={25} color={focused? '#b22222' : 'gray'} />}}/>
      <Tab.Screen 
        name={'Restaurant'} 
        component={RestaurantPage}
        options={{tabBarIcon: ({focused}) => <Ionicons name='restaurant-outline' size={25} color={focused? '#b22222' : 'gray'} />}}/>
      <Tab.Screen 
        name={'Profile'} 
        component={UserProfile}
        options={{tabBarIcon: ({focused}) => <Feather name='user' size={25} color={focused? '#b22222' : 'gray'} />}}/>
    </Tab.Navigator>
  )
}

export default Tabs