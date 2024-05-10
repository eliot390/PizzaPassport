import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {
  const {name, rating, neighborhood, address} = props;
  const {item, headingText, text} = styles;
  return (
    <View style={item}>
      <Text style={headingText}>{name}</Text>
      <Text style={text}>{rating}</Text>
      <Text style={text}>{neighborhood}</Text>
      <Text style={text}>{address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ListItem