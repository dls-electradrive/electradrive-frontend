import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      bg="red.400"
      color="white"
      p={4}
      textAlign="center"
      position="relative"
      bottom={0}
      left={0}
      right={0}
    >
      <Text>&copy; 2024 Your Company</Text>
    </Box>
  );
};

export default Footer;
