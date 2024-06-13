import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import RestaurantListing from "../screens/RestaurantListing";
import RestaurantPage from "../screens/RestaurantPage";
import UserProfile from '../screens/UserProfile';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = ({restaurants}) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#b22222', tabBarInactiveTintColor: 'gray'}}>
      <Tab.Screen 
        name={'Welcome'} 
        options={{tabBarIcon: ({focused}) => <Ionicons name='pizza-outline' size={25} color={focused? '#b22222' : 'gray'} />}}>
        {() => <WelcomeScreen restaurantData={restaurants.data}/>}
      </Tab.Screen>
      <Tab.Screen 
        name={'Listing'} 
        options={{tabBarIcon: ({focused}) => <Ionicons name='list' size={25} color={focused? '#b22222' : 'gray'} />}}>
        {() => <RestaurantListing restaurantData={restaurants.data}/>}
      </Tab.Screen>
      <Tab.Screen 
        name='RestaurantPage'
        component={RestaurantPage}
        options={{tabBarIcon: ({focused}) => <Ionicons name='restaurant-outline' size={25} color={focused? '#b22222' : 'gray'} />}}>
        {/* {() => <RestaurantPage restaurantData={restaurants}/>} */}
        
      </Tab.Screen>
      <Tab.Screen 
        name={'Profile'} 
        component={UserProfile}
        options={{tabBarIcon: ({focused}) => <Feather name='user' size={25} color={focused? '#b22222' : 'gray'} />}}/>
    </Tab.Navigator>
  )
}

export default Tabs