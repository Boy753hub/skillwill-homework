import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from './assets/favicon.png'; // You need to replace this with the actual logo image

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerLogo}>
        <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} />
        </View>
      </View>
      <ScrollView style={styles.feed}>
        <Text style={styles.text}>Sample Post 1</Text>
        <Text style={styles.text}>Sample Post 2</Text>
        <Text style={styles.text}>Sample Post 3</Text>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Text>Bottom Navigation Bar</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  headerLogo:{
    display: 'flex',
    flexDirection:'row'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feed: {
    flex: 1,
  },
  text: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
});
