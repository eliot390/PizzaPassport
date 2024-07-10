import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, TouchableOpacity } from "react-native";

const RestaurantListing = ({ restaurantData }) => {
  const navigation = useNavigation()
  const {container} = styles
  const filterdRatings = restaurantData.filter(restaurant => restaurant.rating>4.0 && restaurant.review_count>500)
  
  return (
    <SafeAreaView style={container}>
      <FlatList 
        data={filterdRatings}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantPage', { restaurant : item})}>
            <View style={styles.item}>
              <Text style={styles.headingText}>{item.name}</Text>
              <Text style={styles.text}>Reviews: {item.review_count}</Text>
              <Text style={styles.text}>Rating: {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )} 
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fffcd9'
  },
  item: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 2,
    paddingRight: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#fff'
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