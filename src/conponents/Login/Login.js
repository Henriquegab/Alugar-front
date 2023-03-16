import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
class Login extends Component {
  render() {
    return (
      <View className='flex-1 justify-center items-center bg-cyan-500'>
        <Text className="text-3xl font-bold mb-4 text-cyan-100">Bem-vindo!</Text>
        <TextInput
        className="p-2 mb-4 w-4/5 bg-white rounded"
        
        placeholder="E-mail"
        />
        <TextInput
          className="p-2 mb-4 w-4/5 bg-white rounded"
          placeholder="Senha"
          secureTextEntry
        />
      </View>
    );
  }
}
export default Login;