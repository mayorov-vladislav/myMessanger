import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated } from 'react-native';



export default function Search() {
  
  const handleProfile = () => {
    console.log('User Profile clicked');
  }
  
  const handleTakePhoto = () => {
    console.log('Take photo clicked');
  }

  const handleNewMessage = () => {
    console.log('New Message clicked');
  } 
  
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
          <Image style={styles.searchIcon} source={require('./images/chats/search-icon.png')} />
          <TextInput
          style={styles.searchInput}
          placeholder='Search'
          placeholderTextColor='#8E8E93'
          />
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
    searchContainer: {
        paddingBottom: 18,
        marginTop: 10,
        opacity: 100,
        right: 1,
    },

    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 12
    },

    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        marginBottom: 3,
    },

    searchInput: {
        flex: 1,
        fontSize: 17,
        fontWeight: '400',
        height: '100%',
    },

});
