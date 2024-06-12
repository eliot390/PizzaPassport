import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
// import welcomeStyles from '../styles/styles';

const WelcomeScreen = () => {
  
  
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Pizza Passport!</Text>
        <Image source={require('../../assets/pizza.png')} style={styles.image} resizeMode='contain'/>
      </View>
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
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20
  },
  image: {
    width: '90%',
    backgroundColor: '#fff'
  }
})

export default WelcomeScreen