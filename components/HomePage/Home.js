import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './HomeHeader';
import Chat from './Chat';
import HomeFooter from './HomeFooter';


export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* <Header></Header> */}
  
      <Chat></Chat>

      <HomeFooter  navigation={navigation}></HomeFooter>

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
