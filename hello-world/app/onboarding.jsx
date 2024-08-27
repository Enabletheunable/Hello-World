import { View, Text, Button } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

export default function onboarding() {
  return (
    <View>
        <Link href={"/"}>Go back Home </Link>
    </View>
  )
}