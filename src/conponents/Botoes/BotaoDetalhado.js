import React from 'react';
import { Pressable, Box, HStack, Badge, Spacer, Text, Flex } from 'native-base';

const BotaoDetalhado = ({ onPress, badgeText, buttonText, timeText, descriptionText, learnMoreText }) => {
  return (
    <Pressable onPress={onPress} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
      <Box width={80}>
        <HStack alignItems="center">
          <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
            {badgeText}
          </Badge>
          <Spacer />
          <Text fontSize={10} color="coolGray.800">
            {timeText}
          </Text>
        </HStack>
        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
          {buttonText}
        </Text>
        <Text mt="2" fontSize="sm" color="coolGray.700">
          {descriptionText}
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            {learnMoreText}
          </Text>
        </Flex>
      </Box>
    </Pressable>
  );
};

export default BotaoDetalhado;
