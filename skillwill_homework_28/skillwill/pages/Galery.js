import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as imagePicker from 'expo-image-picker'
import { useState } from "react";


const Galery = () => {
  const {navigate} = useNavigation()
  const route = useRoute();
  const data = route.params
  const [image, setImage] = useState([])
  
  const pickImage = async ()=> {
    let result = await  imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality:1,
    })

    if(!result.canceled){
      setImage((prev) => [...prev ,{id: result.assets.length ,uri: result.assets[0].uri}])
    }
  }

  return (
    <View>
      <Button title="upload an image" onPress={pickImage} />
      <FlatList
        style={styles.list}
        numColumns={3}
        data={image}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> {navigate('Picture', item.uri)}}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
        />
      <FlatList
        style={styles.list}
        numColumns={3}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> {navigate('Picture', item.uri)}}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Galery;

const styles = StyleSheet.create({
  list: {
    width: 400,
    height: "auto",
  },
  image: {
    width:  130.3333,
    height: 130.3333,
  },
});
