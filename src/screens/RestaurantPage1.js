import React, { useState } from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Linking, TextInput } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PizzaRating from "../components/PizzaRating";
import CheckboxWithAnimation from "../components/CheckboxAnimation";

const RestaurantPage = ({ route }) => {
  const { restaurant } = route.params
  const mapsAddress = restaurant.location.display_address.join(',')
  const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsAddress)}`

  const phonePress = () => {
    Linking.openURL(`tel:${restaurant.display_phone}`)
  }

  const mapsPress = () => {
    Linking.openURL(mapsURL)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: restaurant.image_url}} style={styles.image1}/>
          <Text style={styles.textName}>{restaurant.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.textContainer}>
            <View style={styles.infoContainer}>
              <Fontisto name='map-marker-alt' style={styles.icon}/>
              <TouchableOpacity onPress={mapsPress}>
                <Text style={styles.text}>{restaurant.location.address1}</Text>
              </TouchableOpacity>              
              {restaurant.location.address2 ? <Text style={styles.text}>{restaurant.location.address2}</Text> : null}
              {restaurant.location.address3 ? <Text style={styles.text}>{restaurant.location.address3}</Text> : null}
            </View>
            <View style={styles.infoContainer}>
              <Ionicons name='call-outline' style={styles.icon}/>
              <TouchableOpacity onPress={phonePress}>
                <Text style={styles.text}>{restaurant.display_phone}</Text>
              </TouchableOpacity>              
            </View>
            {/* <View style={styles.infoContainer}>
              {restaurant.url && (
                <>
                  <Fontisto name='world-o' style={styles.icon} />
                  <TouchableOpacity onPress={() => handlePress(restaurant.url)}>
                    <Text style={styles.text}>{modSite}</Text>
                  </TouchableOpacity>
                </>
              )}
            </View> */}
          </View>  
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/pizza_half.png')} style={styles.imagePizza} />        
        {/* <View style={{ flexDirection: 'row', alignItems:'center' }}>
          <Text style={styles.textRating}>Yelp Rating: </Text><PizzaRating rating={restaurant.rating} />
        </View> */}
        <View style={styles.infoContainer}>
          <Text style={styles.textRating}>Yelp Rating: </Text><PizzaRating rating={restaurant.rating} />
          <Text style={styles.textRating}>My Rating: </Text>
          <Text style={styles.text}>Check in </Text>
          <CheckboxWithAnimation />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    paddingLeft:5,
    paddingRight: 5,
    backgroundColor: '#fffcd9'
  },
  imageContainer: {
    padding: 5,
    width: '50%',
    justifyContent: 'flex-start'
  },
  infoContainer: {
    flexDirection: 'column'
  },
  textContainer: {
    flex:1,
    justifyContent: 'space-evenly'
  },
  topContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  bottomContainer: {
    alignItems: 'center'
  },
  phoneContainer: {
    alignItems: 'baseline'
  },
  image1: {
    height:150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#b22222'
  },
  text: {
    fontSize: 18,
    color: 'green'
  },
  textRating: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green'    
  },
  textName: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold'
  },
  icon: {
    color: 'green',
    fontSize: 30,
    paddingRight: 5
  },
  pizzaIcon: {
    fontSize: 40,
    color: '#b22222'
  },
  imagePizza: {
    width: 320,
    height: 125,
    marginTop: 20
  },
  input: {
    
  }
})

export default RestaurantPag