import { StyleSheet, Text, View, TouchableOpacity, Platform, } from 'react-native';


export default function PreferencesHeader({ navigation }) {

  const handleBack = () => {
    navigation.goBack();  
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 65 : 45,
    paddingLeft: 22,
    paddingRight: 32,
    position: 'relative',
  },

  doneText: {
    textAlign: 'right',
    fontSize: 17,
    fontWeight: '600'
  },

});
