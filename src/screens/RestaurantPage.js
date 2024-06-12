import React, { useState } from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Linking, TextInput } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PizzaRating from "../components/PizzaRating";

const RestaurantPage = ({ route }) => {
  const { restaurant } = route.params
  const [text, setText] = useState('')

  let website = restaurant.website ? restaurant.website.toString() : ''
  let modSite = website ? website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : ''

  let address = restaurant.full_address ? restaurant.full_address.toString() : ''
  let modAddress = address.replace(/, /g, '\n').replace(/\nCA /, ' ')

  let phoneNumber = restaurant.phone_number ? restaurant.phone_number.toString() : ''
  let modNumber = phoneNumber.replace(/^\+1(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')
  
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url)
    }else{
      console.log('Unable to open URL: ${url}')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: restaurant.photos[0].src}} style={styles.image1}/>
          <Text style={styles.textName}>{restaurant.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.textContainer}>
            <View style={styles.infoContainer}>
              <Fontisto name='map-marker-alt' style={styles.icon}/>
              <Text style={styles.text}>{modAddress}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Ionicons name='call-outline' style={styles.icon}/>
              <Text style={styles.text}>{modNumber}</Text>
            </View>
            <View style={styles.infoContainer}>
              {restaurant.website && (
                <>
                  <Fontisto name='world-o' style={styles.icon} />
                  <TouchableOpacity onPress={() => handlePress(restaurant.website)}>
                    <Text style={styles.text}>{modSite}</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>  
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/pizza_half.png')} style={styles.imagePizza} />        
        <Text style={styles.text}>{restaurant.description[1]}</Text>
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
          <Text style={styles.textRating}>Rating: </Text><PizzaRating rating={restaurant.rating} />
        </View>
        <View>
          <Text></Text>
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
    flexDirection: 'row',
    alignItems: 'center'
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
    borderRadius: 100
  },
  text: {
    fontSize: 18,
    color: 'green'
  },
  textRating: {
    fontSize: 30,
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

export default RestaurantPage