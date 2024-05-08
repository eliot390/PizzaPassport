import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name='pizza-outline' size={50} color='black' />
        <Text style={styles.text}>Welcome to Pizza Passport!</Text>
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
    justifyContent: 'center',
    backgroundColor: '#b22222'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default WelcomeScreen