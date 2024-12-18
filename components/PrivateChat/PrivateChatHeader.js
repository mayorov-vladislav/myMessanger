import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated } from 'react-native';

import { useRoute } from '@react-navigation/native';

export default function PrivateChatHeader({ navigation }) {
  const route = useRoute();
  const { chatName, img, contact } = route.params || {};

  const handleBack = () => {
    navigation.navigate('ChatsPage');  
}

  const handleCall = () => {
    console.log('Call clicked');
  }

  const handleVideoCall = () => {
    console.log('Video Call clicked');
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
        <Image style={styles.backButton} source={require('./images/back.png')} />
      </TouchableOpacity>

      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image style={styles.userImage} source={img} />
        </TouchableOpacity>
        
        <View>
            <Text style={styles.title}>{chatName || contact}</Text> 
            <Text style={styles.underTitle}>Messanger</Text> 
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleCall}>
          <Image style={styles.headerIcons} source={require('./images/call.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVideoCall}>
          <Image style={styles.headerIcons} source={require('./images/video-call.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: -15,
    paddingLeft: 22,
    paddingRight: 32,
    position: 'relative',
    marginBottom: -25,
    opacity: 100,
  },

  backButtonContainer: {
    left: 10,
    paddingTop: 3,
    
  },

  backButton: {
    width: 13, 
    height: 23,
  },       

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 3,
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginRight: 10,
    top: 2,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    top: 2,
  },

  underTitle: {
    fontSize: 13,
    fontWeight: 'medium',
    color: 'rgba(0, 0, 0, 0.3)',
    bottom: 1,
  },

  headerIcons: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginLeft: 12,
  },

});
