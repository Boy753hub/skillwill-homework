import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import noImage from "../assets/noImage.jpg";

const CameraPage = () => {
  const [Permision, setPermision] = useState(false);
  const [CapturedPictureUri, setCapturedPictureUri] = useState(null);
  const [Galery, setGalery] = useState([]);
  const [Type, setType] = useState(CameraType.back)
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermision(status === "granted");
    })();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPictureUri(photo.uri);
      setGalery((prevlist) => [...prevlist, photo]);
    }
  };

  const { navigate } = useNavigation();

  const moveToGalery = () => {
    navigate("Galery", Galery);
  };
  const switchCamera = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      {Permision ? (
        <Camera style={styles.camera} ref={cameraRef} type={Type} />
      ) : (
        <Text style={styles.camera}> No Access to Camera</Text>
      )}

      <View style={styles.buttons}>
        <Pressable onPress={moveToGalery}>
          {!CapturedPictureUri && (
            <Image source={noImage} style={styles.image} />
          )}
          {CapturedPictureUri && (
            <Image source={{ uri: CapturedPictureUri }} style={styles.image} />
          )}
        </Pressable>

        <Pressable onPress={handleCapture}>
          <Ionicons name="md-radio-button-on" size={90} color="white" />
        </Pressable>

        <Pressable onPress={switchCamera}>
          <MaterialIcons name="flip-camera-android" size={40} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 200,
  },
  camera: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "auto",
    height: 500,
  },
  image: {
    width: 40,
    height: 40,
  },
});
