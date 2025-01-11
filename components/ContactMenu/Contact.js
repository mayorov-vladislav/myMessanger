import { StyleSheet, SafeAreaView, } from 'react-native';
import ContactInfo from './ContactInfo';
 
export default function Contact({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <ContactInfo navigation={navigation}> </ContactInfo>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
