import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetRestaurants } from "./src/hooks/useGetRestaurants";

const App = () => {
  const [loading, error, restaurants] = useGetRestaurants()

  if (restaurants) {
    console.log(restaurants)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#fff'} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#b22222'
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: '#fff'
  }
})
export default App