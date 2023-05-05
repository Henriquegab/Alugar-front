import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './src/conponents/Login/Login';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";

import Screen1 from "./src/conponents/Menu/Menu.js";
import Screen2 from "./src/conponents/Menu/Menu2.js";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

          
            

        <View className="flex-1">

        
          <Stack.Navigator>
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="menu1" component={Screen1} />
              <Stack.Screen name="menu2" component={Screen2} />
              
          </Stack.Navigator>

        {/* <Login></Login> */}
        
        
        </View>
        
    </NavigationContainer>
    
  );
};
