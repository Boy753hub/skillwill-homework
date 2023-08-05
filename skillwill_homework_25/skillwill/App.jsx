import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import heart from './assets/heart.png'; 
import chat from './assets/chat.png'; 
import search from './assets/search.png'; 
import more from './assets/more.png'; 
import video from './assets/video.png'; 
import home from './assets/home.png'; 
import insta from './assets/instagram.png'; 
import chat2 from './assets/chat2.png'; 
import send from './assets/send.png'; 
import bird from './assets/bird.png'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerLogo}>
        <Image source={heart} style={styles.logo} />
        <Image source={chat} style={styles.logo} />
        </View>
      </View>
      <ScrollView style={styles.feed}>
        <View style={styles.post}>
          <Text >Sample Post 1</Text>
          <Image source={bird} style={styles.feedImage} />
          <View style={styles.headerLogo}>
          <Image source={heart} style={styles.logo} />
          <Image source={chat2} style={styles.logo} />
          <Image source={send} style={styles.logo} />
          </View>
        </View>
        <View style={styles.post}>
          <Text >Sample Post 2</Text>
          <Image source={bird} style={styles.feedImage} />
          <View style={styles.headerLogo}>
          <Image source={heart} style={styles.logo} />
          <Image source={chat2} style={styles.logo} />
          <Image source={send} style={styles.logo} />
          </View>
        </View>
        <View style={styles.post}>
          <Text >Sample Post 3</Text>
          <Image source={bird} style={styles.feedImage} />
          <View style={styles.headerLogo}>
          <Image source={heart} style={styles.logo} />
          <Image source={chat2} style={styles.logo} />
          <Image source={send} style={styles.logo} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Image source={home} style={styles.logo} />
        <Image source={search} style={styles.logo} />
        <Image source={more} style={styles.logo} />
        <Image source={video} style={styles.logo} />
        <Image source={insta} style={styles.logo} />
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
    flexDirection:'row',
    gap: 5,
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
    width: 25,
    height: 25,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feed: {
    flex: 1,
    width: 'windowWidth',
  },
  feedImage: {
    width: 'auto',
    height: 300,
    margin: 5
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bottomBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
});
