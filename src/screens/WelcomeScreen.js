import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import welcomeStyles from '../styles/styles';

const WelcomeScreen = () => {
  const {wrapper, container, text} = welcomeStyles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Text style={text}>Welcome to Pizza Passport!</Text>
      </View>
      <Image source={require('../../assets/pizza-guy.jpg')} />
    </SafeAreaView>
    
  );
}

export default WelcomeScreen