import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import PrivateChatHeader from './PrivateChatHeader';


export default function PrivateChat({ route }) {
    const { chatName, chatPreview, img } = route.params || {}; 

    <PrivateChatHeader></PrivateChatHeader>
}

const styles = StyleSheet.create({
    
});