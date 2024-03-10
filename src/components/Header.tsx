import React from 'react';
import PathConstants from '../routes/PathConstants';
import { Box, Heading, Flex, Link, Spacer, Image } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import carseethrough from '../assets/carseethrough.png';
import carovallogo from '../assets/carseethrough.png';
const Header: React.FC = () => {
  return (
    <Box as="header" bg="red.400" color="white" p={5} >
      <Flex alignItems="center">
        <Image src={"/carovallogo.png"} alt="Caroval Logo" boxSize="70px" mr={2} />
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to={PathConstants.HOME} color="white">
            ElectraDrive
          </Link>
        </Heading>
        <Spacer />
        <Flex as="nav" alignItems="center">
          <Link as={RouterLink} to={PathConstants.BUILD} color="white" mr={4}>
            Build
          </Link>
          <Link as={RouterLink} to={PathConstants.INVENTORY} color="white">
            Inventory
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

