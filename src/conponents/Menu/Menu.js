import React, { Component, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import axios, { AxiosError } from 'axios';


const showJwt = async () => {
  
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          alert(token);
        }
      } catch (error) {
        console.error(error);
      }
  
  
  }


function Menu({ navigation }) {
  return (
    

        <View className='flex-1 justify-center items-center bg-green-500'>


          <Text className='text-3xl font-bold mb-4 text-cyan-100'>Tela Inicial</Text>

          <TouchableOpacity className='bg-blue-500 p-3 rounded-md' onPress={showJwt}>
            <Text className='text-white text-center' >Clique aqui</Text>
          </TouchableOpacity>

          
                
                
              
            </View>


      
    
  );
}


export default Menu;