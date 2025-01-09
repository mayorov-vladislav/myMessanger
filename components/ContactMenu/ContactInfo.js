import { StyleSheet, Text, View, SafeAreaView,  Image, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
 
export default function ContactInfo() {
  const route = useRoute();
  const { chatName, img } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactInfo}>

        <View style={styles.contactInfoBlock}>
          <Image source={img} style={styles.contactImage}></Image>
          <Text style={styles.contactName}>{chatName}</Text>
          <Text style={styles.underText}>Messanger</Text>

        </View>

        <View style={styles.buttonsBlock}>
            <View style={styles.button}>
                <Image source={require('./images/phone.png')} style={styles.buttonImage}></Image>
                <Text style={styles.buttonDescription}>Audio</Text>
            </View>
            <View style={styles.button}>
                <Image source={require('./images/video.png')} style={styles.buttonImage}></Image>
                <Text style={styles.buttonDescription}>Video</Text>
            </View>
            <View style={styles.button}>
                <Image source={require('./images/profile.png')} style={styles.buttonImage}></Image>
                <Text style={styles.buttonDescription}>Profile</Text>
            </View>
            <View style={styles.button}>
                <Image source={require('./images/mute.png')} style={styles.buttonImage}></Image>
                <Text style={styles.buttonDescription}>Mute</Text>
            </View>
        </View>
      
      </View>

  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 32,
    paddingRight: 32,
    position: 'relative', 
    backgroundColor: '#fff',
  },

  chatInfo: {
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
    color: ('rgba(0, 0, 0, 0.5)')
  },

  buttonsBlock: {
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    width: '100%', 
    marginTop: 20,  
    paddingHorizontal: 19,
    gap: Platform.OS === 'ios' ? 0 : 45
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
