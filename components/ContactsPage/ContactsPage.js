import { StyleSheet, View, } from 'react-native';

import Contacts from './Contacts';
import ContactsFooter from './ContactsFooter';

export default function ContactsPage({ navigation }) {
  
  return (
    <View style={styles.container}>
        <Contacts navigation={navigation}></Contacts>
        <ContactsFooter navigation={navigation}></ContactsFooter>
    </View>
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
  
});
