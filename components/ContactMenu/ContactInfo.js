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
      
      </View>

  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  
});
