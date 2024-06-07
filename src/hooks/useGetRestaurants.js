import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
// import { API_KEY, URL, API_HOST } from '@env';

const URL='https://maps-data.p.rapidapi.com/searchmaps.php?query=los%20angeles%20pizza&country=us&limit=10&zoom=13'
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f3406fb6e0msh728732180988c91p113947jsnf64913b6134e',
    'x-rapidapi-host': 'maps-data.p.rapidapi.com'
  }
};

export const useGetRestaurants = () => {
  const [loading, setLoading] = useState(true) // false to true
  const [location, setLocation] = useState(null) // added null
  const [error, setError] = useState(null) // added null
  const [restaurants, setRestaurants] = useState([])
  
  const fetchRestaurantData = async () => {
    try {
      const res = await fetch(URL, options)
      const data = await res.json()
      setRestaurants(data)
    } catch (error) {
      setError('Could not retrieve restaurant data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      await fetchRestaurantData()
    })()
  }, [])

  return [loading, error, restaurants]
}