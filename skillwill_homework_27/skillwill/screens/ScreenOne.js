import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import st from "../styles"
import { useNavigation } from '@react-navigation/native'

const ScreenOne = () => {
const { navigate} = useNavigation()
const onMoveToSecondScreen = () => {
  navigate('ScreenTwo')
}

  return (
    <View style={st.screen}>
      <Text>ScreenOne</Text>
      {/* <Button title='Move to second screen' onPress={onMoveToSecondScreen}/> */}
    </View>
  )
}

export default ScreenOne

const styles = StyleSheet.create({})