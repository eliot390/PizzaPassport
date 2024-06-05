import { StyleSheet } from "react-native";

const welcomeStyles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15
  }
})

export default welcomeStyles;