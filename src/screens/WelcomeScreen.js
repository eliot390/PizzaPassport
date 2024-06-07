import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
// import welcomeStyles from '../styles/styles';

const WelcomeScreen = () => {
  const {wrapper, container, welcomeText, text} = styles
  //const {city} = restaurantData
  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Text style={welcomeText}>Welcome to Pizza Passport!</Text>
      </View>
      <Image source={require('../../assets/pizza-guy.jpg')} />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20
  }
})

export default WelcomeScreen