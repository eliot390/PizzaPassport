import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const User1 = [
  {
    'first_name': 'Eliot',
    'last_name': 'Pardo',
    'stamps_earned': [
      { "id": 1, "title": "Visit 5 Pizza Spots" },
      { "id": 2, "title": "Visit 10 Pizza Spots" },
      { "id": 3, "title": "Visit 20 Pizza Spots" },
      { "id": 4, "title": "Visit Your Favorite Spot" },
      { "id": 5, "title": "Ate on National Pizza Day" },
      { "id": 6, "title": "Award 6" },
      { "id": 7, "title": "Award 7" },
      { "id": 8, "title": "Award 8" },
      { "id": 9, "title": "Award 9" }
    ],
    'favorite_spot': 'Bestia',
    'favorite_pie': 'Lamb Sausage'
  }
]

const UserProfile = () => {
  const user = User1[0]
  let stampsEarned = user.stamps_earned

  const renderStamps = () => {
    return stampsEarned.map((stamp, index) => (
      <View key={index} style={styles.stampsRow}>        
          <MaterialCommunityIcons
            name="seal"
            size={80}
            color="#b22222"
          />
          <Text style={styles.stampTitle}>{stamp.title}</Text>               
      </View>
    ))
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.containerInfo}>
        <Image source={require('../../assets/default_pfp.png')} style={styles.image}/>
        <Text style={styles.textName}>{user.first_name} {user.last_name.charAt(0)}.</Text>
      </View>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.stampsContainer}>
          {renderStamps()}
        </ScrollView>
      </View>
      <View style={styles.containerStats}>
        <Text style={styles.text}>Favorite Spot: {user.favorite_spot}</Text>
        <Text style={styles.text}>Favorite Pie: {user.favorite_pie}</Text>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fffcd9'
  },
  containerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  stampsContainer: {
    flexDirection: 'row',
    padding: 5
  },
  containerStats: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textName: {
    fontSize: 25
  },
  text: {
    fontSize: 25
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 100
  },
  singleStamp: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  stampTitle: {
    textAlign: 'center',
    width: 75,
    flexWrap: 'wrap'
  },
  icon: {
    marginHorizontal: 5
  },
  stampsRow: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 10
  }
})
export default UserProfile