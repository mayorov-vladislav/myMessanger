import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Platform } from 'react-native';

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
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate='fast'
            >
                <TouchableOpacity style={styles.settings} activeOpacity={1}>
                    <View style={styles.baseSettings}>
                        <View style={styles.setting}>
                            <Image source={require('./images/dark-mode.png')} style={styles.icon}/>
                            <Text style={styles.title}>Dark Mode</Text>
                            <TouchableOpacity style={styles.switchContainer} onPress={toggleDarkMode}>
                                <View style={[styles.switchBackground, { backgroundColor: isDarkMode ? '#444' : '#ddd' }]}>
                                    <Animated.View
                                        style={[styles.switchKnob, { transform: [{ translateX }] }]}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/active-status.png')} style={styles.icon}/>
                            <Text style={styles.title}>Active Status</Text>
                            <Text style={styles.infoText}>On</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/username.png')} style={styles.icon} />
                            <Text style={styles.title}>Username</Text>
                            <Text style={styles.infoText}>m.me/Jacob_d</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/phone.png')} style={styles.icon} />
                            <Text style={styles.title}>Phone</Text>
                            <Text style={styles.infoText}>+1 202 555 0147</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.midTextBlock}>
                        <Text style={styles.midText}>Preferences</Text>
                    </View>

                    <View style={styles.preferencesSettings}>
                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/notifications.png')} style={styles.icon}/>
                            <Text style={styles.title}>Notifications & Sounds</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/people.png')} style={styles.icon}/>
                            <Text style={styles.title}>People</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/messaging-settings.png')} style={styles.icon} />
                            <Text style={styles.title}>Messaging Setings</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/notifications.png')} style={styles.icon}/>
                            <Text style={styles.title}>Notifications & Sounds</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.setting}>
                            <Image source={require('./images/people.png')} style={styles.icon}/>
                            <Text style={styles.title}>People</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.setting, styles.lastSetting]}>
                            <Image source={require('./images/messaging-settings.png')} style={styles.icon} />
                            <Text style={styles.title}>Messaging Setings</Text>
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

    preferencesSettings: {
        flexDirection: 'column',
    },

    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
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
        backgroundColor: '#ddd',
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

    midTextBlock: {
        marginTop: 2,
        marginBottom: 18,
    },

    midText: {
        color: 'rgba(0, 0, 0, 0.35)',
        fontSize: 13,
        fontWeight: '700',
        textTransform: 'uppercase'
    },

    lastSetting: {
        marginBottom: Platform.OS === 'ios' ? 20 : 50,
    },
});
