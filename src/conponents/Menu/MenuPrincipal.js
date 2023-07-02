import React, { useState } from 'react';
import { Box, Center, ScrollView } from 'native-base';
import BotaoDetalhado from '../Botoes/BotaoDetalhado';

const MenuPrincipal = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const camera = () => {
    navigation.navigate('menu1');
  }
  const cadastroDiacono = () => {
    navigation.navigate('menuCadastroDiacono');
  }
  const listaDiacono = () => {
    navigation.navigate('menuListaDiacono');
  }

  return (
    <ScrollView>
    <Box flex={1} bg={{ linearGradient: { colors: ['tertiary.50', 'error.200'], start: [0, 1], end: [1, 0] } }} p="12">
      <Center flex={1}>
        <BotaoDetalhado
          onPress={camera}
          badgeText="Camera"
          buttonText="Usar câmera do dispositivo"
          timeText="Agora"
          descriptionText="Esta funcionalidade permite usar a câmera do dispositivo como um dos requisitos de criação de software para a disciplina de optativa 1"
          learnMoreText="Saiba mais"
        />
        <Box height={5}></Box>
        <BotaoDetalhado
          onPress={cadastroDiacono}
          badgeText="Diacono"
          buttonText="Cadastro de Diacono"
          timeText=""
          descriptionText="Funcionalidade de cadastro de Diaconos no sistema"
          learnMoreText="Saiba mais"
        />
        <Box height={5}></Box>
        <BotaoDetalhado
          onPress={listaDiacono}
          badgeText="Diacono"
          buttonText="Listar Diaconos no sistema"
          timeText=""
          descriptionText="Funcionalidade de listagem de Diaconos no sistema"
          learnMoreText="Saiba mais"
        />
        <Box height={5}></Box>
        <BotaoDetalhado
          onPress={cadastroDiacono}
          badgeText="Camera"
          buttonText="Usar câmera do dispositivo"
          timeText="Agora"
          descriptionText="Esta funcionalidade permite usar a câmera do dispositivo como um dos requisitos de criação de software para a disciplina de optativa 1"
          learnMoreText="Saiba mais"
        />
      </Center>
    </Box>
    </ScrollView>
  );
};

export default MenuPrincipal;
