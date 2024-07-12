import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserProfile = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading ] = useState(true)
  const [error, setError ] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://192.168.1.215:8080/api/v1/user')
        if (!response.ok) {
          throw new Error("Network response not ok")
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchUsers()
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>
  }

return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.email}</Text>
        )}
      />
    </View>
  )
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
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold'
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