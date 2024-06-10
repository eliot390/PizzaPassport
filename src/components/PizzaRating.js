import React from "react";
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PizzaRating = ({ rating }) => {
  const wholePizza = Math.floor(rating)
  const fractionPizza = rating-wholePizza
  const fractionWidth = fractionPizza * 20
  
  const wholeIcons = Array.from({ length: wholePizza}, (_, index) =>(
    <Ionicons key={index} name='pizza-outline' size={20} color='#b22222' />
  ))

  return (
    <View style={{ flexDirection: 'row', alignItems:'center', marginBottom: 8 }}>
      {wholeIcons}
      {fractionPizza > 0 && (
        <View style={{ overflow: 'hidden',  width: fractionWidth}}>
          <Ionicons name='pizza-outline' size={20} color='#b22222' />
        </View>
      )}
    </View>
  )
}

export default PizzaRating