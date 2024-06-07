import React from "react";
import { SafeAreaView, Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Linking } from "react-native";
import { Fontisto } from '@expo/vector-icons';

const RestaurantPage = ({ route }) => {
  const { restaurant } = route.params
  let webs = restaurant.website.toString()
  let modSite = webs.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
  
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
      <View>
        <Image source={{ uri: restaurant.photos[0].src}} style={styles.image1}/>
        <Text style={styles.textName}>{restaurant.name}</Text>
      </View>
      <View style={styles.website}>
        <Fontisto name='world-o' style={styles.icon} />
        {restaurant.website && (
          <TouchableOpacity onPress={() => handlePress(restaurant.website)}>
            <Text style={styles.text}>{modSite}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.textContainer}>        
        <Text style={styles.text}>{restaurant.full_address}</Text>
        <Text style={styles.text}>Reviews: {restaurant.review_count}</Text>
        <Text style={styles.text}>Rating: {restaurant.rating}</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'    
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
  textName: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold'
  },
  website: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: 'green',
    fontSize: 30,
    paddingRight: 10
  }
})
export default RestaurantPage