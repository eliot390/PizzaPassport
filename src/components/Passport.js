import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from "react-native";

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

const Item = (props) => {
  const {name, rating, neighborhood, address} = props;
  return (
    <View style={styles.item}>
      <Text style={styles.headingText}>{name}</Text>
      <Text style={styles.text}>{rating}</Text>
      <Text style={styles.text}>{neighborhood}</Text>
      <Text style={styles.text}>{address}</Text>
    </View>
  )
}

const Passport = () => {
  const renderItem = ({item}) => (
    <Item 
      name={item.name} 
      rating={item.rating} 
      neighborhood={item.neighborhood} 
      address={item.address}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
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
    fontSize: 30,
    fontWeight: 'bold', 
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Passport