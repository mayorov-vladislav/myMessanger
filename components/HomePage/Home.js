import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';


export default function Home() {
  
  const [chats, setChat] = useState([
    { chatName: 'Martin Randolph', chatPreview: 'You: What’s man! · 9:40 AM', img: require('./images/chats/user-photo1.png'), key: '5' },
    { chatName: 'Andrew Parker', chatPreview: 'You: Ok, thanks! · 9:25 AM', img: require('./images/chats/user-photo2.png'), key: '6' },
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '7' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '8' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '9' },
    { chatName: 'Martin Randolph', chatPreview: 'You: What’s man! · 9:40 AM', img: require('./images/chats/user-photo1.png'), key: '10' },
    { chatName: 'Andrew Parker', chatPreview: 'You: Ok, thanks! · 9:25 AM', img: require('./images/chats/user-photo2.png'), key: '11' },
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '12' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '13' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '14' },
  ] || [])  

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
