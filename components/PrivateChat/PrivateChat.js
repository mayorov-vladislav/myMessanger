import { StyleSheet, View, } from 'react-native';
import PrivateChatInfo from './PrivateChatInfo';


export default function PrivateChat({ navigation }) {
    return (
        <View style={styles.container}>
            <PrivateChatInfo navigation={navigation}></PrivateChatInfo>
            
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