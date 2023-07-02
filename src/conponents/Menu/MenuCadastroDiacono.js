import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, KeyboardAvoidingView } from 'react-native';
import { Box, VStack, Input, Center, Button } from 'native-base';
import apiUrl from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios, { AxiosError } from 'axios';



const MenuCadastroDiacono = ({navigation}) => {
  const [nome, setNome] = useState('');
  

  

  const submit = async () => {

    const token = await AsyncStorage.getItem('token');
    


    const formData = {
        nome: nome,
        token: token
       
      };
  
      try {
        const response = await axios.post(`${apiUrl}/api/diacono`, formData);
  
        if (response.status == 201) {
          const token = response.data.data.token;
          alert(response.data.message);
          navigation.navigate('menuPrincipal');
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
  
  

  return (
    <>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Box flex={1} bg={{ linearGradient: { colors: ['tertiary.50', 'error.200'], start: [0, 1], end: [1, 0] } }} p="12">
            {/* <VStack> */}
                <Center flex={1}>
                    <Input size="xl" bg={'coolGray.100'} mx="auto" placeholder="Nome do diacono" w="100%" onChangeText={setNome} />
                    <Box height={5}></Box>
                    <Button size="sm" colorScheme="secondary"  onPress={submit}>
                        Cadastrar Diacono
                    </Button>
                </Center>
                
            {/* </VStack> */}
      </Box>
      </KeyboardAvoidingView>
    </>
  );
};

export default MenuCadastroDiacono;