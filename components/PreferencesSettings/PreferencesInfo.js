import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';


export default function PreferencesInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./images/user-image.png')}
                    style={styles.mainImage}
                ></Image>
                <Image
                    source={require('./images/bg-image.png')}
                    style={styles.overlayImage}
                ></Image>
            </View>

            <Text style={styles.userName}>Jacob West</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },

    imageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    
    mainImage: {
        width: 115,
        height: 115,
        borderRadius: 20,
    },

    overlayImage: {
        position: 'absolute',
    },

    userName: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 600
    },
});