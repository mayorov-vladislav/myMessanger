import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Switch } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // Импортируем необходимые компоненты


export default function PreferencesSettings() {

    const scrollY = useState(new Animated.Value(0))[0];
    const translateX = useState(new Animated.Value(0))[0];
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const toValue = isDarkMode ? 0 : 20;
        Animated.timing(translateX, {
            toValue,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsDarkMode((prevState) => !prevState);
    };

    return (
        <View style={{ flex: 0 }}>
            <Animated.ScrollView
                contentContainerStyle={styles.settingsListContainer}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y);
                }}
                scrollEventThrottle={16} 
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.settings} activeOpacity={1}>
                    <View style={styles.baseSettings}>
                        <View style={styles.darkMode}>
                            <Image source={require('./images/dark-mode.png')} style={styles.icon}/>
                            <Text style={styles.title}>Dark Mode</Text>
                            <TouchableOpacity style={styles.switchContainer} onPress={toggleDarkMode}>
                            <View style={styles.switchBackground}>
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <Path
                                            d={
                                                isDarkMode
                                                    ? 'M12 3V1L8 5L12 9V7C15.88 7 19 10.12 19 14C19 17.87 15.88 21 12 21C8.12 21 5 17.87 5 14C5 12.76 5.44 11.55 6.22 10.73L7.64 12.15C7.95 12.46 8.45 12.43 8.74 12.12C9.04 11.82 9.02 11.32 8.71 11.03L7.29 9.61C8.1 8.54 8.99 7.91 10 7.5C10.1 6.88 10.68 6.32 11.3 6.32C11.95 6.32 12.43 6.79 12.43 7.42C12.43 7.87 12.18 8.29 11.78 8.4C12.18 8.77 12.43 9.15 12.43 9.5C12.43 9.85 12.95 10.32 13.6 10.32C14.31 10.32 14.77 10.81 14.77 11.52C14.77 12.06 14.24 12.52 13.7 12.52C13.45 12.52 13.25 12.32 13.14 12.05C13.13 12.06 13.12 12.07 13.12 12.08C13.02 11.81 13.21 11.53 13.46 11.5C13.94 11.47 14.33 11.02 14.33 10.5C14.33 9.68 13.65 9.01 12.82 9.01C12.42 9.01 12.06 9.31 12.06 9.71L12 7Z' // Здесь ваш путь для картинки "Солнце"
                                                    : 'M12 4C7.03 4 3 8.03 3 12C3 15.97 7.03 20 12 20C16.97 20 21 15.97 21 12C21 8.03 16.97 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 7C11.69 7 11.38 7.13 11.07 7.36L12 8.61L12.93 7.36C12.62 7.13 12.31 7 12 7Z' // Путь для картинки "Луна"
                                            }
                                            fill={isDarkMode ? '#fff' : '#000'} // Меняем цвет иконки в зависимости от режима
                                        />
                                    </Svg>
                                </View>
                                <Animated.View
                                    style={[
                                        styles.switchKnob,
                                        { transform: [{ translateX }] },
                                    ]}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.activeStatus}>
                            <Image source={require('./images/active-status.png')} style={styles.icon}/>
                            <Text style={styles.title}>Active Status</Text>
                            <Text style={styles.infoText}>On</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.username}>
                            <Image source={require('./images/username.png')} style={styles.icon} />
                            <Text style={styles.title}>Username</Text>
                            <Text style={styles.infoText}>m.me/Jacob_d</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.phone}>
                            <Image source={require('./images/phone.png')} style={styles.icon} />
                            <Text style={styles.title}>Phone</Text>
                            <Text style={styles.infoText}>+1 202 555 0147</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>

                <View style={styles.separatorLine} />
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },

    settings: {
        paddingTop: 42,
    },

    baseSettings: {
        flexDirection: 'column',
    },

    darkMode: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    
    activeStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    
    username: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    phone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon:{
        width: 40,
        height: 40,
    },

    title: {
        flex: 1,
        color: '#000',
        fontSize: 17,
        fontWeight: '400',
        marginLeft: 12,
    },

    infoText: {
        color: 'rgba(0, 0, 0, 0.35)',
        fontSize: 17,
        fontWeight: '400',
        marginRight: 10,
    },

    linkButton: {
        width: 8,
        height: 13
    },

    switchContainer: {
        width: 50,
        height: 30,
        justifyContent: 'center',
        position: 'relative',
    },

    switchBackground: {
        width: 50,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden', 
    },

    switchBackgroundImage: {
        width: '100%',
        height: '100%',
    },

    switchKnob: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 3,
        left: 3,
    },
});