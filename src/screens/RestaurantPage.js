import React from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar, View } from "react-native";

const RestaurantPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/PrimePizza01.jpg')} style={styles.image1}/>
        <Image source={require('../../assets/PrimePizza02.jpg')} style={styles.image2}/>
      </View>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',    
  },
  image1: {
    height: '20%',
    width: '40%',
    marginRight: 2,

  },
  image2: {
    height: '20%',
    width: '60%'
  }
})
export default RestaurantPage