import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import bgImage from './assets/home2.png'
import Toque from './src/Toque'

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bg}>
        <Toque></Toque>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      height: null,
      width:'100%',
  },
});
