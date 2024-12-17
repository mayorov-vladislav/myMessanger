import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeFooter({ navigation }) {

    const handleProfile = () => {
        navigation.navigate('ProfilePage');  
    }
      
    const handleChats = () => {
        navigation.navigate('ChatsPage');  
    }
    
    const handleContacts = () => {
        navigation.navigate('ContactsPage');  
    }

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={handleChats}>
                <Image style={styles.footerIcons} source={require('./images/chats/chats.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleContacts}>
                <Image style={styles.footerIcons} source={require('./images/chats/contacts.png')} />
                <View style={styles.notificationCircle}>
                    <Text style={styles.notificationText}>5</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleProfile}>
                <Image style={styles.footerIcons} source={require('./images/chats/profile.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 23,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        zIndex: 2
    },

    notificationCircle: {
        position: 'absolute',
        top: -8,
        right: -11,
        backgroundColor: 'rgba(90, 212, 57, 0.16)',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    notificationText: {
        color: '#5AD439',
        fontSize: 13,
        fontWeight: '600',
    },
});
