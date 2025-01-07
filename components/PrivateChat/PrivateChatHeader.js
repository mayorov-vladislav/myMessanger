import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Platform, Button } from 'react-native';

import { useRoute } from '@react-navigation/native';

export default function PrivateChatHeader({ navigation }) {
  const route = useRoute();
  const { chatName, img, contact } = route.params || {};

  const handleBack = () => {
    navigation.goBack();  
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
        <Image style={styles.backButton} source={require('./images/back.png')} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.middleContainer}>
            <Text style={styles.title}>{chatName || contact}</Text> 
            <Text style={styles.underTitle}>Messanger</Text> 
      </View>
    
      <TouchableOpacity onPress={handleBack}>
          <Image style={styles.userImage} source={img} />
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 55 : 40,
    paddingBottom: -15,
    paddingLeft: 22,
    paddingRight: 32,
    position: 'relative',
    marginBottom: -25,
  },

  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 10,
    paddingTop: 3,
  },

  backButton: {
    width: 29, 
    height: 31,
    right: 10,
  }, 
  
  backText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '300',
    right: 13,
  },

  middleContainer: {
    flex: 1,
    alignItems: 'center',
    right:  Platform.OS === 'ios' ? 9 : 5,
    top: 3,
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
