import { StyleSheet, Text, View, SafeAreaView, Button, Image, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import PrivateChatFooter from './PrivateChatFooter';

export default function PrivateChatInfo() {
  const route = useRoute();
  const { chatName, img } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container}>
  <View style={styles.chatInfo}>
    <Image style={styles.headContactImage} source={{ img }} />

    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{chatName}</Text>
      <Text style={styles.underTitle}>In Your contacts</Text>
    </View>

    <View style={styles.bottomContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.contactImage} source={{ img }} />
        <Image
          style={styles.secondImage}
          source={require('../HomePage/images/chats/user-image.png')}
        />
      </View>

      <Text style={styles.helpfullText}>
        Say hi to your new Facebook friend, {chatName?.split(' ')[0]}.
      </Text>

      
    </View>
  </View>

  <PrivateChatFooter />
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  chatInfo: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },

  headContactImage: {
    height: 100,
    width: 100,
    marginBottom: 12,
  },

  contactInfo: {
    alignItems: 'center',
    marginBottom: 2,
  },

  contactName: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },

  underTitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },

  bottomContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-end', 
    width: '100%',
    paddingBottom: 70, 
  },

  imageContainer: {
    position: 'relative',
    bottom: Platform.OS === 'ios' ? 50 : 70,
    left: 20
  },

  contactImage: {
    width: 58,
    height: 58,
    alignItems: 'center',

  },

  secondImage: {
    width: 60,
    height: 60,
    right: 18,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#fff',
  },

  helpfullText: {
    position: 'absolute',
    top: 76,
    fontWeight: 'light',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    paddingLeft: 7
  },

});
