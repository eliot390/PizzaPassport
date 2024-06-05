import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {
  const {title, first, last, cell} = props;
  const {item, headingText, text} = styles;
  return (
    <View >
      <Text>{title}</Text>
      <Text style={text}>{first}</Text>
      <Text style={text}>{last}</Text>
      <Text style={text}>{cell}</Text>
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