import { StyleSheet, Text, View, SafeAreaView, Image, Platform, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ContactOptions from './ContactOptions';

export default function ContactInfo({ navigation }) {
  const route = useRoute();
  const { chatName, img } = route.params || {};

  const handleBack = () => {
    navigation.goBack();  
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.contactInfo}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
                    <Image source={require('./images/back.png')} style={styles.backButton}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.contactInfoBlock}>
                <Image source={img} style={styles.contactImage} />
                <Text style={styles.contactName}>{chatName}</Text>
                <Text style={styles.underText}>Messanger</Text>
            </View>

            <View style={styles.buttonsBlock}>
                <View style={styles.button}>
                    <Image source={require('./images/phone.png')} style={styles.buttonImage} />
                    <Text style={styles.buttonDescription}>Audio</Text>
                </View>
                <View style={styles.button}>
                    <Image source={require('./images/video.png')} style={styles.buttonImage} />
                    <Text style={styles.buttonDescription}>Video</Text>
                </View>
                <View style={styles.button}>
                    <Image source={require('./images/profile.png')} style={styles.buttonImage} />
                    <Text style={styles.buttonDescription}>Profile</Text>
                </View>
                <View style={styles.button}>
                    <Image source={require('./images/mute.png')} style={styles.buttonImage} />
                    <Text style={styles.buttonDescription}>Mute</Text>
                </View>
            </View>
        </View>

        <ContactOptions />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 32,
    paddingRight: 32,
    position: 'relative',
    backgroundColor: '#fff',
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  header: {
    width: '100%',
    position: 'absolute',
    left: Platform.OS === 'ios' ? 30 : 0,
    zIndex: 1, 
  },

  contactInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },

  contactInfoBlock: {
    alignItems: 'center',
  },

  contactImage: {
    width: 100,
    height: 100,
    marginBottom: 2,
  },

  contactName: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 2,
  },

  underText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },

  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: -200,
    gap: Platform.OS === 'ios' ? 0 : 50,
  },

  buttonImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },

  buttonDescription: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
