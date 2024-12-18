import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';

export default function PrivateChatFooter() {
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

    return (
        <View style={styles.footer}>
            <View style={[styles.leftContainer, isKeyboardVisible && styles.leftContainerHidden]}>
                <TouchableOpacity>
                    <Image
                        style={styles.footerImage}
                        source={require('./images/actions.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.footerImage}
                        source={require('./images/photo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.footerImage}
                        source={require('./images/emoji.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Aa"
                    placeholderTextColor="#B0B0B0"
                />
            </View>

            <View style={styles.rightContainer}>
            <TouchableOpacity>
                    <Image
                        style={styles.footerImage}
                        source={require('./images/audio.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
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
        marginLeft: 15,
        backgroundColor: '#ddd',
        borderRadius: 50,
    },

    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    
    footerImage: {
        marginRight: 5,
        borderRadius: 5,
    },
    
    textInput: {
        borderRadius: 20,
        paddingHorizontal: 12,
        height: 40,
        fontSize: 16,
    },
});
