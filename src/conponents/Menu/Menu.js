import React, { Component, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import axios, { AxiosError } from 'axios';



// const Menu = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const bodyText = 'This is not really a bird nest.';

  

//   return (
//     <>
    
//       <View className='flex-1 justify-center items-center bg-green-500'>
        
//           <Text>{bodyText}</Text>
        
//       </View>
//     </>
//   );
// };


function Menu({ navigation }) {
  return (
    

        <View className='flex-1 justify-center items-center bg-green-500'>


          <Text className='text-3xl font-bold mb-4 text-cyan-100'>Tela Inicial</Text>

          <TouchableOpacity className='bg-blue-500 p-3 rounded-md' onPress={() => navigation.navigate('menu2')}>
            <Text className='text-white text-center' >Clique aqui</Text>
          </TouchableOpacity>

          
                
                
              
            </View>


      
    
  );
}


export default Menu;