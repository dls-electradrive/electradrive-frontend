import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
      <Text>&copy; 2024 Your Company</Text>
    </Box>
  );
};

export default Footer;
