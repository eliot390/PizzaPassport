import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetRestaurants } from "./src/hooks/useGetRestaurants";

const App = () => {
  const [loading, error, restaurants] = useGetRestaurants()

  if (restaurants && !loading) {
    return (
      <NavigationContainer>
        <Tabs restaurants={restaurants} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        error
      ) : (
        <>
          <ActivityIndicator size={'large'} color={'#fff'} />
          <Text style={styles.text}>Please wait...</Text>
        </>
        
      )}
    </View>
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
    color: '#fff',
    fontSize: 20
  }
})

export default App