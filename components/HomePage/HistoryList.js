import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from 'react-native';


export default function HistoryList() {
  
    const [history, setHistory] = useState([
        { title: 'Your story', img: require('./images/chats/plus.png'), key: '1' },
        { title: 'Martin', img: require('./images/chats/user-photo1.png'), key: '2' },
        { title: 'Andrew', img: require('./images/chats/user-photo2.png'), key: '3' },
        { title: 'Karen', img: require('./images/chats/user-photo3.png'), key: '4' },
        { title: 'Maisy', img: require('./images/chats/user-photo4.png'), key: '5' },
        { title: 'Joshua', img: require('./images/chats/user-photo5.png'), key: '6' },
        { title: 'Eminem', img: require('./images/chats/user-photo6.png'), key: '7' },
      ]);
    
      
    const handleNewHistory = () => {
        console.log('New History clicked');
    }

  return (
    <FlatList
        horizontal
        data={history}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.historyScrollContainer}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
            <View style={styles.history}>
            <TouchableOpacity 
                style={styles.historyIconContainer}
                onPress={index === 0 ? handleNewHistory : null}
            >
                <Image source={item.img} style={styles.historyIcon} />
                {index !== 0 && <View style={styles.statusCircle} />}
            </TouchableOpacity>
            <Text style={styles.historyText}>{item.title}</Text>
            </View>
        )}>
    </FlatList>
  );  
}

const styles = StyleSheet.create({
  historyScrollContainer: {
    flexDirection: 'row',
    height: 80,
    marginBottom: 20,
  },

  history: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 60,
  },

  historyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 4, 
    borderWidth: 1,
    borderColor: '#5AD439',
  },

  historyText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },

  statusCircle: {
    position: 'absolute',
    top: 39,
    right: 3,
    backgroundColor: '#5AD439',
    width: 12,
    height: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
