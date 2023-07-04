import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, KeyboardAvoidingView } from 'react-native';
import { Box, VStack, Input, Center, Button } from 'native-base';
import apiUrl from '../../../config';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios, { AxiosError } from 'axios';



const MenuEditaDiacono = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const route = useRoute();
  const { idDiacono } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const response = await axios.get(`${apiUrl}/api/diacono/${idDiacono}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setNome(response.data.data.nome);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const submit = async () => {
    const token = await AsyncStorage.getItem('token');
    const formData = {
      nome: nome,
      token: token,
    };

    try {
      const response = await axios.patch(`${apiUrl}/api/diacono/${idDiacono}`, formData);

      if (response.status == 200) {
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
          <Center flex={1}>
            <Input size="xl" bg={'coolGray.100'} mx="auto" placeholder="Nome do diácono" value={nome} w="100%" onChangeText={setNome} />
            <Box height={5}></Box>
            <Button size="sm" colorScheme="secondary" onPress={submit}>
              Salvar alterações
            </Button>
          </Center>
        </Box>
      </KeyboardAvoidingView>
    </>
  );
};

export default MenuEditaDiacono;
