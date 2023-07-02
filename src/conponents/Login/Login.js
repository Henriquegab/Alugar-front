import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Center, Image, Button } from 'native-base';
import apiUrl from '../../../config';

import axios from 'axios';
import { Box, Stack } from 'native-base';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${apiUrl}/api/login`, formData);

      if (response.status == 200) {
        const token = response.data.data.token;
        try {
          await AsyncStorage.setItem('token', token);
        } catch (error) {
          alert(response.data.message);
        }
        navigation.navigate('menuPrincipal');
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} bg={{ linearGradient: { colors: ['tertiary.50', 'error.200'], start: [0, 1], end: [1, 0] } }} p="12" rounded="xl">
          <Center flex={1}>
            <Image source={require('../../../assets/logo.png')} alt="Alternate Text" size="sm" width={800} marginBottom={8} />
            <Stack space={4} w="75%" maxW="300px" mx="auto">
              <Input size="md" placeholder="Email" value={email} onChangeText={setEmail} />
              <Input type='password' size="md" placeholder="Senha" value={password} secureTextEntry onChangeText={setPassword} />
              <Button size="sm" colorScheme="secondary" onPress={handleLogin}>
                Entrar
              </Button>
            </Stack>
          </Center>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
