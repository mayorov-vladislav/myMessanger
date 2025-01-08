import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';

export default function ContactsHeader({ navigation }) {
  
  const handleProfile = () => {
    navigation.navigate('Preferences');;
  }
  
  const handleNewChat = () => {
    console.log('New Chat clicked');
  }

  const handleAddContact = () => {
    console.log('Add Contact clicked');
  }

  return (
    <View style={styles.header}>
        <View style={styles.leftContainer}>
            <TouchableOpacity onPress={handleProfile}>
              <Image style={styles.userImage} source={require('../HomePage/images/chats/user-image.png')} />
            </TouchableOpacity>
            
            <Text style={styles.title}>Contacts</Text>
        </View>

        <View style={styles.rightContainer}>
            <TouchableOpacity onPress={handleNewChat}>
              <Image style={styles.headerIcons} source={require('./images/open-chat.png')} />
            
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleAddContact}>
              <Image style={styles.headerIcons} source={require('./images/add-contact.png')} />
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
    paddingTop: Platform.OS === 'ios' ? 55 : 40,
    paddingBottom: -15,
    paddingLeft: 32,
    paddingRight: 32,
    position: 'relative',
    marginBottom: -15,
    opacity: 100,
    backgroundColor: '#fff',
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    top: 2,
    left: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  headerIcons: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 12,
  },

});
