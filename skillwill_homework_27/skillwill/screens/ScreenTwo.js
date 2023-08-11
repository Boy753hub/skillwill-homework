import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import st from "../styles"
import { useNavigation } from '@react-navigation/native'

const ScreenTwo = () => {

  const {navigate} = useNavigation()
  const onMoveToFirstScreen = () =>{
    navigate('ScreenOne')
  }
  return (
    <View style={st.screen}>
      <Text>ScreenTwo</Text>
      <Button title='move to first screen' onPress={onMoveToFirstScreen}/>
    </View>
  )
}

export default ScreenTwo

const styles = StyleSheet.create({})