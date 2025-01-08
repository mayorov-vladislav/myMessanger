import { StyleSheet, ScrollView } from 'react-native';
import PreferencesInfo from './PreferencesInfo';
import PreferencesSettings from './PreferencesSettings';


export default function Preferences() {
    return (
        <ScrollView style={styles.container}>
            <PreferencesInfo></PreferencesInfo>
            <PreferencesSettings></PreferencesSettings>
        </ScrollView>
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