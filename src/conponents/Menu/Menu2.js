import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import axios, { AxiosError } from 'axios';



const Menu2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const bodyText = 'This is not really a bird nest2.';

  

  return (
    <>
    
      <View className='flex-1 justify-center items-center bg-green-500'>
        
          <Text>{bodyText}</Text>
        
      </View>
    </>
  );
};

export default Menu2;