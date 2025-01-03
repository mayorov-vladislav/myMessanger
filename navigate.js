import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/HomePage/Home';
import ContactsPage from './components/ContactsPage/ContactsPage';
import HomeHeader from "./components/HomePage/HomeHeader";
import ContactsHeader from "./components/ContactsPage/ContactsHeader";
import PrivateChat from "./components/PrivateChat/PrivateChat";
import PrivateChatHeader from "./components/PrivateChat/PrivateChatHeader";


const Stack = createStackNavigator();

export default function Navigate() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="ChatsPage" 
            component={Home} 
            options={{
                header: ({ navigation }) => <HomeHeader navigation={navigation} /> 
          }} />
          <Stack.Screen 
            name="ContactsPage" 
            component={ContactsPage} 
            options={{
                header: ({ navigation }) => <ContactsHeader navigation={navigation} /> 
          }} />

          <Stack.Screen 
            name="PrivateChat" 
            component={PrivateChat} 
            options={{
              header: ({ navigation }) => <PrivateChatHeader navigation={navigation} />

          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
