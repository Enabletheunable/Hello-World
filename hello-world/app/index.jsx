import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function index() {
  return (

    <View>
      <Text style={styles.TextStyleLight}>This the light typefave </Text>
      <Text style={styles.TextStyleMedium}>This the medium typefave </Text>
      <Text style={styles.TextStyleBold}>This the Bold typefave </Text>
      <Link href={"./onboarding"}> Go to onboarding page </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    fles: 1
  },
  TextStyleLight: {
    fontFamily: 'RobotoMono-Light',
    fontWeight: 23,
    margin: 5
  },
  TextStyleMedium: {
    fontFamily: 'RobotoMono-Medium',
    fontWeight: 40,
    margin: 5
  },
  TextStyleBold: {
    fontFamily: 'RobotoMono-Bold',
    fontWeight: 'bold', // Adjust if needed
    margin: 5,
  }
})