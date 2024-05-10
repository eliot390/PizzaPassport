import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    name: 'Prime Pizza',
    rating: 4.4,
    neighborhood: 'Little Tokyo',
    address: '141 S Central Ave'
  },
  {
    name: 'PIZZANISTA!',
    rating: 4.6,
    neighborhood: 'Fashion District',
    address: '2019 E 7th St'
  },
  {
    name: 'Garage Pizza',
    rating: 4.2,
    neighborhood: 'Silver Lake',
    address: '4339 Sunset Blvd'
  },
  {
    name: 'Purgatory Pizza',
    rating: 4.6,
    neighborhood: 'Boyle Heights',
    address: '1326 1st St'
  },
  {
    name: 'L’Antica Pizzeria',
    rating: 4.5,
    neighborhood: 'Hollywood',
    address: '1534 N McCadden Pl'
  },
  {
    name: 'Vito\'s\ Pizza',
    rating: 4.6,
    neighborhood: 'Beverly Grove',
    address: '846 N La Cienega Blvd #4708'
  },
  {
    name: 'Lamonica\'\s NY Pizza',
    rating: 4.6,
    neighborhood: 'Westwood',
    address: '1066 Gayley Ave'
  }
]

const Empty = () => (
  <View>
    <Text>Something went wrong!</Text>
  </View>
)

const RestaurantListing = () => {
  const renderItem = ({item}) => (
    <ListItem 
      name={item.name} 
      rating={item.rating} 
      neighborhood={item.neighborhood} 
      address={item.address}
    />
  )

  const {container} = styles
  return (
    <SafeAreaView style={container}>
      <FlatList 
        data={DATA} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<Empty />}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0c100'
  }
})

export default RestaurantListing