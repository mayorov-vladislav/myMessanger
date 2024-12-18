import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import PrivateChatHeader from './PrivateChatHeader';
import PrivateChatFooter from './PrivateChatFooter';


export default function PrivateChat() {
    return (
        <View style={styles.container}>
            
            <PrivateChatFooter></PrivateChatFooter>
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
      },
});