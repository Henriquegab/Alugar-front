import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './src/conponents/Login/Login';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";

import { NativeBaseProvider, Box, HStack, Pressable, Icon } from "native-base";


import Screen1 from "./src/conponents/Menu/Menu.js";
import Screen2 from "./src/conponents/Menu/Menu2.js";
import Screen3 from "./src/conponents/Menu/MenuPrincipal.js";
import Screen4 from "./src/conponents/Menu/MenuCadastroDiacono.js";
import Screen5 from "./src/conponents/Menu/MenuListaDiacono.js";
import Screen6 from "./src/conponents/Menu/MenuEditaDiacono.js";


const Stack = createStackNavigator();

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App() {
  return (
    <NavigationContainer>

          
      <NativeBaseProvider config={config}>


        





        {/* <View className="flex-1"> */}

        
          <Stack.Navigator>
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="menu1" component={Screen1} />
              <Stack.Screen name="menu2" component={Screen2} />
              <Stack.Screen name="menuPrincipal" component={Screen3} />
              <Stack.Screen name="menuCadastroDiacono" component={Screen4} />
              <Stack.Screen name="menuListaDiacono" component={Screen5} />
              <Stack.Screen name="menuEditaDiacono" component={Screen6} />
              
          </Stack.Navigator>

        {/* <Login></Login> */}
        
        
        {/* </View> */}
        </NativeBaseProvider>
    </NavigationContainer>
    
  );
};
