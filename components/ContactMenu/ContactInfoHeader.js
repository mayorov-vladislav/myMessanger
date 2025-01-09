import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native';


export default function ContactInfoHeader({ navigation }) {

  const handleBack = () => {
    navigation.goBack();  
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
        <Image source={require('./images/back.png')} style={styles.backButton}></Image>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 95 : 65,
    paddingLeft: 22,
    paddingRight: 32,
    position: 'relative',
  },

  backButton: {
    width: 13,
    height: 23,
  },

});
