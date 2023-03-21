import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import axios, { AxiosError } from 'axios';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('https://portalgpsgenesis.com.br/public/api/login', formData);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
    
      <View className='flex-1 justify-center items-center bg-red-500'>
        
          <Text className="text-3xl font-bold mb-4 text-cyan-100">Bem-vindo!</Text>
          <TextInput
          className="p-2 mb-4 w-4/5 bg-white rounded-tl-lg rounded-br-lg"
          value={email}
          placeholder="E-mail"
          onChangeText={setEmail}
          />
          <TextInput
            className="p-2 mb-4 w-4/5 bg-white rounded-tl-lg rounded-br-lg"
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          <Button
          
          title="Entrar"
          color="#841584"
          accessibilityLabel="Entrar"
          onPress={handleLogin}
/>
        
      </View>
      </>
  );
};

export default Login;