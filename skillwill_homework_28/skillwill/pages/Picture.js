import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Picture = () => {
    const route = useRoute()
    const data = route.params
  return (
    <View style={styles.component}>
      <Image source={{uri: data}} style={styles.image}/>
    </View>
  )
}

export default Picture

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    image: {
        width: 'auto',
        height: 400,    
    }
})