import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from "react-native";
import ListItem from "../components/ListItem";

// const DATA = [
//   {
//     name: 'Prime Pizza',
//     rating: 4.4,
//     neighborhood: 'Little Tokyo',
//     address: '141 S Central Ave'
//   },
//   {
//     name: 'PIZZANISTA!',
//     rating: 4.6,
//     neighborhood: 'Fashion District',
//     address: '2019 E 7th St'
//   },
//   {
//     name: 'Garage Pizza',
//     rating: 4.2,
//     neighborhood: 'Silver Lake',
//     address: '4339 Sunset Blvd'
//   },
//   {
//     name: 'Purgatory Pizza',
//     rating: 4.6,
//     neighborhood: 'Boyle Heights',
//     address: '1326 1st St'
//   },
//   {
//     name: 'L’Antica Pizzeria',
//     rating: 4.5,
//     neighborhood: 'Hollywood',
//     address: '1534 N McCadden Pl'
//   },
//   {
//     name: 'Vito\'s\ Pizza',
//     rating: 4.6,
//     neighborhood: 'Beverly Grove',
//     address: '846 N La Cienega Blvd #4708'
//   },
//   {
//     name: 'Lamonica\'\s NY Pizza',
//     rating: 4.6,
//     neighborhood: 'Westwood',
//     address: '1066 Gayley Ave'
//   }
// ]

const RestaurantListing = ({ restaurantData }) => {
  // const renderItem = ({item}) => (
  //   <ListItem 
  //     name={item.name.title}
  //     rating={item.name.first} 
  //     neighborhood={item.name.last} 
  //     address={item.cell}
  //   />
  //   )
  const {container} = styles

  const filterdRatings = restaurantData.filter(restaurant => restaurant.rating>4.0);
  
  return (
    <SafeAreaView style={container}>
      <FlatList 
        data={filterdRatings}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.headingText}>{item.name}</Text>
            <Text style={styles.text}>{item.city}</Text>
            <Text style={styles.text}>{item.price_level}</Text>
            <Text style={styles.text}>Rating: {item.rating}</Text>
          </View>
        )} 
        keyExtractor={(item) => item.business_id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0c100'
  },
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#b22222'
  },
  headingText: {
    fontSize: 27,
    fontWeight: 'bold', 
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
})

export default RestaurantListing