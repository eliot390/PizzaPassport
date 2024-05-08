import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./src/components/WelcomeScreen";
import Passport from "./src/components/Passport";

const App = () => {
  return (
    <View style={styles.container}>
      <Passport />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App