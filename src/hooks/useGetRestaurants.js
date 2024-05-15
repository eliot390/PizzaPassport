import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { API_KEY, URL, API_HOST } from '@env';

export const useGetRestaurants = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState()
  const [error, setError] = useState()
  const [restaurants, setRestaurants] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  
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