import { StyleSheet, View, Image, TouchableOpacity, Platform } from 'react-native';

export default function ContactsFooter({ navigation }) {

    const handleChats = () => {
        navigation.navigate('ChatsPage');  
    }

    const handlePreferences = () => {
        navigation.navigate('Preferences');  
    }

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={handleChats}>
                <Image style={styles.footerIcons} source={require('./images/chats.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.footerIcons} source={require('./images/contacts.png')} />
                
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handlePreferences}>
                <Image style={styles.footerIcons} source={require('./images/profile.png')} />
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
        paddingVertical: Platform.OS === 'ios' ? 18 : 10,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        zIndex: 2
    },

    footerIcons: {
        bottom: Platform.OS === 'ios' ? 5 : 0,
    },

    notificationText: {
        color: '#5AD439',
        fontSize: 13,
        fontWeight: '600',
    },
});
