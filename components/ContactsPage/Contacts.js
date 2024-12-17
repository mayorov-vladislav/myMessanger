import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, Animated } from 'react-native';
import Search from '../HomePage/Search';

export default function Contacts() {
    const [contacts, setContact] = useState([
        { contact: 'Martha Craig', img: require('../HomePage/images/chats/user-photo1.png'), key: '5' },
        { contact: 'Kieron Dotson', img: require('../HomePage/images/chats/user-photo2.png'), key: '6' },
        { contact: 'Zack John', img: require('../HomePage/images/chats/user-photo3.png'), key: '7' },
        { contact: 'Jamie Franco', img: require('../HomePage/images/chats/user-photo4.png'), key: '8' },
        { contact: 'Tabitha Potter', img: require('../HomePage/images/chats/user-photo5.png'), key: '9' },
        { contact: 'Albert Lasker', img: require('../HomePage/images/chats/user-photo6.png'), key: '10' },
        { contact: 'Martha Craig', img: require('../HomePage/images/chats/user-photo1.png'), key: '11' },
        { contact: 'Kieron Dotson', img: require('../HomePage/images/chats/user-photo2.png'), key: '12' },
        { contact: 'Zack John', img: require('../HomePage/images/chats/user-photo3.png'), key: '13' },
        { contact: 'Jamie Franco', img: require('../HomePage/images/chats/user-photo4.png'), key: '14' },
        { contact: 'Tabitha Potter', img: require('../HomePage/images/chats/user-photo5.png'), key: '15' },
        { contact: 'Albert Lasker', img: require('../HomePage/images/chats/user-photo6.png'), key: '16' },
    ]);

    const scrollY = useState(new Animated.Value(0))[0];

    const handleContact = () => {
        console.log('Contact clicked');
    }

    const handleOpenContact = () => {
        console.log('Open Chat clicked');
    }

    return (
        <View style={ {flex: 1}}>
            <FlatList
                data={[{ type: 'search', key: 'search-key' }, ...contacts]}
                contentContainerStyle={styles.contactsListContainer}
                keyExtractor={(item) => item.key}
                renderItem={({ item, index }) => {
                    if (item.type === 'search') {
                        return <Search />;
                    }
                    return (
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.contacts,
                                    index === contacts.length && styles.lastContact,
                                ]}
                                onPress={handleContact}
                            >
                                <Image style={styles.userChatImage} source={item.img} />
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactNameText}>{item.contact}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={handleOpenContact}
                                >
                                    <Image
                                        source={require('./images/hello.png')}
                                        style={styles.helloImage}
                                    />
                                </TouchableOpacity>
                                </TouchableOpacity>
                            <View style={styles.separatorLine} />
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                style={styles.contactListStyle}
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

    contactsListContainer: {
        paddingHorizontal: 1,
        flexGrow: 1,
    },
    
    contactListStyle: {
        flex: 1,
    },
    
    contacts: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    
    lastContact: {
        marginBottom: 100,
    },
    
    userChatImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 11,
    },
    
    contactInfo: {
        flex: 1,
    },
    
    contactNameText: {
        fontSize: 17,
        fontWeight: '500',
    },

    conactImage: {
        width: 32,
        height: 32,
    },

    separatorLine: {
        height: 1,
        backgroundColor: '#e0e0e0',
        width: '100%', 
    },
});
