import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, TouchableOpacity } from "react-native";

const RestaurantListing = ({ restaurantData }) => {
  const navigation = useNavigation()
  const {container} = styles
  const filterdRatings = restaurantData.filter(restaurant => restaurant.rating>4.0);
  
  return (
    <SafeAreaView style={container}>
      <FlatList 
        data={filterdRatings}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantPage', { restaurant : item})}>
            <View style={styles.item}>
              <Text style={styles.headingText}>{item.name}</Text>
              {/* <Text style={styles.text}>{item.city}</Text> */}
              <Text style={styles.text}>{item.price_level}</Text>
              <Text style={styles.text}>Rating: {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )} 
        keyExtractor={(item) => item.business_id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#b22222'
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    marginVertical: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#fffcd9'
  },
  headingText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'green' 
  },
  text: {
    fontSize: 18
  }
})

export default RestaurantListing