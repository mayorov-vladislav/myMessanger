import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import Search from '../HomePage/Search';

import { useRoute } from '@react-navigation/native';

export default function Contacts({ navigation }) {

    const route = useRoute();
    const { contacts = [] } = route.params || {};

    const scrollY = useState(new Animated.Value(0))[0];

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
                                onPress={() => navigation.navigate('PrivateChat', item)}
                                
                            >
                                <Image style={styles.userChatImage} source={item.img} />
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactNameText}>{item.chatName}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('PrivateChat', item)}
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
