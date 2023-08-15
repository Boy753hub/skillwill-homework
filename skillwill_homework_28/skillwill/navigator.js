import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Camera from './pages/Camera'
import Galery from './pages/Galery'
import Picture from './pages/Picture'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      showLabel: false,
      headerTintColor: 'gray',
      headerStyle: {
        backgroundColor:'black',
      }
      }}>
        <Stack.Screen name='Camera' component={Camera}/>
        <Stack.Screen name='Galery' component={Galery}/>
        <Stack.Screen name='Picture' component={Picture}/>
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})