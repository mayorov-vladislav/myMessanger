import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated } from 'react-native';
import Search from './Search';
import HistoryList from './HistoryList';


export default function Chat() {
  
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

  const scrollY = new Animated.Value(0);

  

  return (
      <FlatList
        data={[
          { type: 'search', key: '2'  }, 
          { secondType: 'historyList', key: '1' }, 
          ...chats,
        ]}
        contentContainerStyle={styles.chatListContainer}
        keyExtractor={(item) => item.key || item.type}
        renderItem={({ item, index }) => {
          if (item.type === 'search') {
            return (
              <Search></Search>
            );
          }
          if (item.secondType === 'historyList') {
            return (
              <HistoryList></HistoryList>
            );
          }

          return (
            <View style={[styles.chat, index === chats.length - -1 && styles.lastChat]}>
              <Image style={styles.userChatImage} source={item.img} />
              <View style={styles.chatInfo}>
                <View style={styles.chatName}>
                  <Text style={styles.chatNameText}>{item.chatName}</Text>
                </View>
                <View style={styles.chatPreview}>
                  <Text style={styles.chatPreviewText}>{item.chatPreview}</Text>
                </View>
              </View>
              <View style={styles.messageStatus}></View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        style={styles.chatListStyle} 
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      />
  );  
}

const styles = StyleSheet.create({
  chatListContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 80,
    flexGrow: 1,
    zIndex: 3
  },

  chatListStyle: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 0,
  },

  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    left: 2,
  },

  lastChat: {
    marginBottom: 60,  
  },

  userChatImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 11,
  },

  chatInfo: {
    flex: 1,
  },

  chatName: {
    marginBottom: 4,
  },

  chatNameText: {
    fontSize: 17,
    fontWeight: 'medium',
  },

  chatPreview: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chatPreviewText: {
    fontSize: 14,
    fontWeight: '400'
  },

  messageStatus: {
    position: 'absolute',
    top: 33,
    right: 10,
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    borderColor: '#ссс',
    borderWidth: 1,
    borderRadius: 60,
  }
});
