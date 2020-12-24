import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import defaultImg from './assets/default.jpg';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

function closeImg(){
setSelectedImage(null)
}
  return (
    selectedImage?
    <View style={styles.container} >
    <Image 
      source={{ uri: selectedImage.localUri }}
      style={styles.thumbnail}
    />
     <TouchableOpacity onPress={closeImg} style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
  </View>:
    <View style={styles.container}>
     <Image source={defaultImg} style={styles.logo} />
      <Text style={styles.instructions}>
        To view a photo from your phone, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
});
