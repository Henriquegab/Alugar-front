import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, TextInput, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Box, VStack, Input, Center, Button, HStack, Text, Icon, Divider, Menu, HamburgerIcon, Pressable } from 'native-base';
import apiUrl from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


import axios, { AxiosError } from 'axios';



const MenuListaDiacono = ({navigation}) => {
  
    const [nomes, setNomes] = useState([]);

    const [idDiacono, setIdDiacono] = useState([]);
    
    const [loading, setLoading] = useState(true); // Estado de carregamento

    

    useEffect(() => {
      // Faz a solicitação à API para obter os nomes

    
      const fetchData = async () => {

        try{
            const token = await AsyncStorage.getItem('token');
            if (token) {
                const response = await axios.get(`${apiUrl}/api/diacono`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
      
                setNomes(response.data.data); // Atualiza o estado com os nomes obtidos da API
              }
            
        }
        catch(error){
            console.log(error)
        }
        finally {
          setLoading(false); // Altera o estado de carregamento para false após a resposta da API
        }
        
      }

      
        fetchData();
    }, []);
  

    const editaDiacono = async (id) => {
        setIdDiacono(id)
        navigation.navigate('menuEditaDiacono', { idDiacono: id });

    }
    const deletaDiacono = async (id) => {
        setIdDiacono(id);
      
        const apiDeletaDiacono = async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
              const response = await axios.delete(`${apiUrl}/api/diacono/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            }
            setIdDiacono("");
          } catch (error) {
            console.log(error);
          }
        }
      
        const fetchData = async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
              const response = await axios.get(`${apiUrl}/api/diacono`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
      
              setNomes(response.data.data);
            }
          } catch (error) {
            console.log(error);
          }
        }
      
        await apiDeletaDiacono(); // Chama a função para excluir o diacono
        await fetchData(); // Chama a função para atualizar os dados
      }

      if (loading) {
        // Exibe um indicador de carregamento enquanto espera a resposta da API
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        );
      }



  return (
    <>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Box flex={1} bg={{ linearGradient: { colors: ['tertiary.50', 'error.200'], start: [0, 1], end: [1, 0] } }} p="12">
                    <VStack space={4} alignItems="center" w="100%" mx="auto">
                    {nomes.map(nome => (
                        
                        <HStack key={nome.id} justifyContent="space-between">
                            <Center w="72" h="60" alignItems="left" paddingLeft={5} bg="indigo.100" rounded="md" shadow={3} marginLeft={2} marginRight={2} alignSelf="left">
                                
                                
                                    <Text flexShrink={1} textAlign="left">{nome.nome}</Text>
                                
                                
                                
                                
                            </Center>


                            <Menu trigger={triggerProps => {
                                    return <Pressable {...triggerProps}>

                                            <Center w="16" h="60" alignItems="center" bg="indigo.100" rounded="md" shadow={3} marginLeft={2} marginRight={2} alignSelf="left">
                                                
                                                
                                                <HamburgerIcon />
                                                
                                                
                                                
                                                
                                            </Center>
                                            
                                            </Pressable>;
                                    }}>

                                            <Menu.Item onPress={() => editaDiacono(nome.id)}>Editar</Menu.Item>
                                            <Menu.Item onPress={() => deletaDiacono(nome.id)}>Deletar</Menu.Item>
                                            

                                    </Menu>
                            
                        
                        </HStack>
                    ))}
                    </VStack>
                </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuListaDiacono;