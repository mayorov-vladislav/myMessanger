import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated, Modal } from 'react-native';
import Search from './Search';
import HistoryList from './HistoryList';
import Footer from './Footer';

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
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '15' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '16' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '17' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '18' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '19' },
    { chatName: 'Martin Randolph', chatPreview: 'You: What’s man! · 9:40 AM', img: require('./images/chats/user-photo1.png'), key: '20' },
    { chatName: 'Andrew Parker', chatPreview: 'You: Ok, thanks! · 9:25 AM', img: require('./images/chats/user-photo2.png'), key: '21' },
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '22' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '23' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '24' },
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '25' },
    { chatName: 'Maisy Humphrey', chatPreview: 'Have a good day, Maisy! · Fri', img: require('./images/chats/user-photo4.png'), key: '26' },
    { chatName: 'Joshua Lawrence', chatPreview: 'The business plan loo…  · Thu', img: require('./images/chats/user-photo5.png'), key: '27' },
    { chatName: 'Andrew Parker', chatPreview: 'You: Ok, thanks! · 9:25 AM', img: require('./images/chats/user-photo2.png'), key: '28' },
    { chatName: 'Karen Castillo', chatPreview: 'You: Ok, See you in To… · Fri', img: require('./images/chats/user-photo3.png'), key: '29' },
  ] || []);

  const scrollY = new Animated.Value(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleLongPress = (chat) => {
    setSelectedChat(chat);
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setSelectedChat(null);
  };

  const renderMenu = () => (
    <Modal transparent visible={menuVisible} animationType="fade" onRequestClose={closeMenu}>
      <TouchableOpacity style={styles.modalOverlay} onPress={closeMenu}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Опции для {selectedChat?.chatName}</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/delete-chat.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Удалить чат</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/call.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Позвонить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/video-call.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Видео звонок</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/send-photo.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Отправить фото</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/settings.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Настройки</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('./images/chats/notifications.png')} style={styles.menuImage} />
            <Text style={styles.menuButtonText}>Уведомления</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {renderMenu()}
      <FlatList
        data={[{ type: 'search', key: '200' }, { secondType: 'historyList', key: '250' }, ...chats]}
        contentContainerStyle={styles.chatListContainer}
        keyExtractor={(item) => item.key || item.type}
        renderItem={({ item, index }) => {
          if (item.type === 'search') {
            return <Search />;
          }
          if (item.secondType === 'historyList') {
            return <HistoryList />;
          }
          return (
            <TouchableOpacity
              style={[
                styles.chat,
                (index === chats.length - -1 || index === chats.length - -1) && styles.lastChat, 
              ]}
              onLongPress={() => handleLongPress(item)}
            >
              <Image style={styles.userChatImage} source={item.img} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatNameText}>{item.chatName}</Text>
                <Text style={styles.chatPreviewText}>{item.chatPreview}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
        style={styles.chatListStyle}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  chatListContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
    flexGrow: 1,
  },
  
  chatListStyle: {
    flex: 1,
  },
  
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  
  lastChat: {
    marginBottom: 100, 
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
  
  chatNameText: {
    fontSize: 17,
    fontWeight: 'medium',
  },
  
  chatPreviewText: {
    fontSize: 14,
    fontWeight: '400',
  },
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  
  menuImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  
  menuButtonText: {
    fontSize: 16,
  },

});
