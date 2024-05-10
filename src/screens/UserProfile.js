import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import welcomeStyles from '../styles/styles';

const UserProfile = () => {
  const {wrapper, container, text} = welcomeStyles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Text style={text}>Profile</Text>
      </View>
    </SafeAreaView>
    
  );
}

export default UserProfile