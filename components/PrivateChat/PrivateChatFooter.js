import { StyleSheet, View, Image, TouchableOpacity, TextInput, Keyboard, BackHandler, Platform, KeyboardAvoidingView  } from 'react-native';
import { useState, useEffect } from 'react';


export default function PrivateChatFooter({ onSendMessage }) {
    const [message, setMessage] = useState('');
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardVisible(true); 
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardVisible(false); 
        });

        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (isKeyboardVisible) {
                Keyboard.dismiss(); 
                return true;
            }
            return false;
        });


        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
            backHandler.remove();
        };
    }, [isKeyboardVisible]);

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('')
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} 
        >
            <View style={styles.footer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Aa"
                        placeholderTextColor="#B0B0B0"
                        value={message}
                        onChangeText={setMessage}
                    />
                </View>

                <View style={styles.rightContainer}>
                <TouchableOpacity onPress={handleSendMessage}>
                        <Image
                            style={styles.footerImage}
                            source={require('./images/audio.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: Platform.OS === 'ios' ? 25 : 20,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        zIndex: 2,
        paddingHorizontal: 16,
    },
    
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%',
        transition: 'width 0.3s ease',
    },

    leftContainerHidden: {
        width: '6.5%', 
        overflow: 'hidden', 
    },

    textInputContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
        backgroundColor: '#ddd',
        borderRadius: 50,
        top: Platform.OS === 'ios' ? 3 : 0,
    },

    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        top: Platform.OS === 'ios' ? 3 : 0,
    },
    
    footerImage: {
        marginRight: 7,
        borderRadius: 7,
    },
    
    textInput: {
        borderRadius: 20,
        paddingHorizontal: 12,
        height: 40,
        fontSize: 16,
    },
});
