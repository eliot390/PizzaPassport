import React from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Linking } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PizzaRating from "../components/PizzaRating";

const RestaurantPage = ({ route }) => {
  const { restaurant } = route.params
  let website = restaurant.website ? restaurant.website.toString() : ''
  let modSite = website ? website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : ''
  let address = restaurant.full_address ? restaurant.full_address.toString() : ''
  let modAddress = address.replace(/, /g, '\n').replace(/\nCA /, ' ')
  
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url)
    }else{
      console.log('Unable to open URL: ${url}')
    }
  }

  // const renderPizza = (rating) => {
  //   const slices = [];
  //   for (let i=1; i<=5; i++) {
  //     slices.push(
  //       <Ionicons
  //         key={i}
  //         name={i <= rating ? 'pizza-outline' : ''}
  //         style={styles.pizzaIcon}
  //       />
  //     )
  //   }
  //   return slices
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: restaurant.photos[0].src}} style={styles.image1}/>
        <Text style={styles.textName}>{restaurant.name}</Text>
      </View>
      <View style={styles.website}>
        {restaurant.website && (
          <>
            <Fontisto name='world-o' style={styles.icon} />        
            <TouchableOpacity onPress={() => handlePress(restaurant.website)}>
              <Text style={styles.text}>{modSite}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.textContainer}>        
        <Text style={styles.textAddress}>{modAddress}</Text>
        <Text style={styles.textReview}>Reviews: {restaurant.review_count}</Text>
        {/* <Text style={styles.textRating}>Rating: {renderPizza(Math.round(restaurant.rating))}</Text> */}
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
          <Text style={styles.textRating}>Rating: </Text><PizzaRating rating={restaurant.rating} />          
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
    backgroundColor: '#fffcd9'
  },
  imageContainer: {
    marginBottom: 10
  },
  image1: {
    height:150,
    width: 150,
    marginRight: 2
  },
  image2: {
    height: 100,
    width: '100%'
  },
  textContainer: {
    flex:1,
    justifyContent:'flex-start'
  },
  text: {
    fontSize: 20,
    color: 'green'
  },
  textAddress: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10
  },
  textRating: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10
  },
  textReview: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10
  },
  textName: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold'
  },
  website: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  icon: {
    color: 'green',
    fontSize: 30,
    paddingRight: 10
  },
  pizzaIcon: {
    fontSize: 20,
    color: '#b22222'
  }
})

export default RestaurantPage