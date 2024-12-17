import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated, Modal } from 'react-native';
import Header from './ContactsHeader';
import Search from '../HomePage/Search';
import ContactsFooter from './ContactsFooter';

export default function ContactsPage({ navigation }) {
  
  return (
    <View style={styles.container}>
        
        <Search></Search>

        <ContactsFooter navigation={navigation}></ContactsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 32,
        paddingRight: 32,
        position: 'relative', 
      },
  


});