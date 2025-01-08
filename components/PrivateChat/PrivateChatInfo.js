import { StyleSheet, Text, View, SafeAreaView,  Image, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PrivateChatFooter from './PrivateChatFooter';
 
export default function PrivateChatInfo() {
  const route = useRoute();
  const { chatName, img } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatInfo}>

        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{chatName}</Text>
          <Text style={styles.underTitle}>In Your contacts</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.contactImage} source={img} />
          </View>

          <Text style={styles.helpfullText}>
            Say hi to your new Facebook friend, {chatName?.split(' ')[0]}.
          </Text>

          
        </View>
      </View>

    <PrivateChatFooter />
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 110,
  },

  chatInfo: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  contactInfo: {
    alignItems: 'center',
  },

  contactName: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },

  underTitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },

  bottomContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-end', 
    width: '100%',
  },

  imageContainer: {
    position: 'relative',
    bottom: Platform.OS === 'ios' ? 190 : 185,
  },

  contactImage: {
    width: 58,
    height: 58,
    alignItems: 'center',

  },

  helpfullText: {
    position: 'absolute',
    top:  Platform.OS === 'ios' ? 80 : 75,
    fontWeight: 'light',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    paddingLeft: 7
  },

});
