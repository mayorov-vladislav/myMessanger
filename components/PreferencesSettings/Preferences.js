import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import PreferencesInfo from './PreferencesInfo';

export default function Preferences() {
    return (
        <View style={styles.container}>
            <PreferencesInfo></PreferencesInfo>
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