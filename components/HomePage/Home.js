import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './Header';
import Chat from './Chat';
import Footer from './Footer';


export default function Home() {
  

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <Header></Header>
  
      <Chat></Chat>

      <Footer></Footer>

    </View>
    
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative', 
  },

});
