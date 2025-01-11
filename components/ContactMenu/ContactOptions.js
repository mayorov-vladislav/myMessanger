import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Platform } from 'react-native';

export default function ContactOptions() {

    const scrollY = useState(new Animated.Value(0))[0];
    const translateX = useState(new Animated.Value(0))[0];

    return (
        <View style={{ flex: 0 }}>
            <Animated.ScrollView
                contentContainerStyle={styles.optionsListContainer}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y);
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate='fast'
            >
                <TouchableOpacity style={styles.settings} activeOpacity={1}>
                    <View style={styles.baseSettings}>

                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>Color</Text>
                            <Image source={require('./images/oval.png')} style={styles.baseIcon}/>
                        </TouchableOpacity>
                        <View style={styles.divider} />

                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>Emoji</Text>
                            <Image source={require('./images/like.png')} style={styles.baseIcon} />
                        </TouchableOpacity>
                        <View style={styles.divider} />

                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>NickNames</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.midTextBlock}>
                        <Text style={styles.midText}>More actions</Text>
                    </View>

                    <View style={styles.moreActions}>
                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>Search in Conversation</Text>
                            <Image source={require('./images/search.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <View style={styles.divider} />

                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>Create group</Text>
                            <Image source={require('./images/group.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <View style={styles.divider} />

                    </View>
                    
                    <View style={styles.midTextBlock}>
                        <Text style={styles.midText}>Privacy</Text>
                    </View>

                    <View style={styles.privacySettings}>
                        <TouchableOpacity style={styles.setting}>
                            <Text style={styles.title}>Notifications</Text>
                            <Text style={styles.infoText}>On</Text>
                            <Image source={require('./images/arrow-right.png')} style={styles.linkButton} />
                        </TouchableOpacity>
                        <View style={styles.divider} />

                        <TouchableOpacity style={[styles.setting, styles.lastSetting]}>
                            <Text style={styles.title}>Ignore Messages</Text>
                            <Image source={require('./images/planet.png')} style={styles.icon}/>
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

    },

    baseSettings: {
        flexDirection: 'column',
        marginTop: 230,
    },

    optionsListContainer: {
        flexDirection: 'column',
    },

    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32,
    },

    icon:{
        width: 32,
        height: 32,
        marginRight: Platform.OS === 'android' ? 0 : 25,
    },

    title: {
        flex: 1,
        color: '#000',
        fontSize: 17,
        fontWeight: '400',
        marginLeft: Platform.OS === 'android' ? 0 : 25,
    },

    infoText: {
        color: 'rgba(0, 0, 0, 0.35)',
        fontSize: 17,
        fontWeight: '400',
        marginRight: 10,
    },

    linkButton: {
        width: 8,
        height: 13,
        marginRight:  Platform.OS === 'android' ? 0 : 25,
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
        marginLeft: Platform.OS === 'android' ? 0 : 25,
    },

    midText: {
        color: 'rgba(0, 0, 0, 0.35)',
        fontSize: 13,
        fontWeight: '700',
        textTransform: 'uppercase'
    },

    lastSetting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Platform.OS === 'ios' ? 10 : 30,
    },

    baseIcon: {
        width: 24,
        height: 24,
        marginRight:  Platform.OS === 'android' ? 0 : 25,
    },

    divider: {
        height: 1,
        backgroundColor: '#ddd', 
        marginBottom: 20,
        marginTop: -10,
        marginLeft: Platform.OS === 'android' ? 0 : 25,
        marginRight: Platform.OS === 'android' ? 0 : 25,
    },
});
