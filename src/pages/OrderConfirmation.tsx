import React from 'react';
import { Box, Heading, Text, Button, Center, List, ListItem, Flex } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderDetails = state ? state.orderDetails : null;

  // Redirect if no order details are found
  React.useEffect(() => {
    if (!orderDetails) {
      navigate('/'); // redirecting to the home page or another appropriate page
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) {
    return null; // or a loader while redirecting or a message before redirection
  }

  return (
    <Flex minHeight="80vh" width="full" align="center" justifyContent="center">
      <Box width="full" maxW="md" px={5} py={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4} textAlign="center">Order Confirmation</Heading>
        <Text fontSize="lg" mb={4} textAlign="center">
          Thank you for your purchase, {orderDetails.customerName}!
        </Text>
        
        <Box mt={4}>
          <Heading size="md" mb={2} textAlign="center">Customer Information:</Heading>
          <List spacing={3} style={{ textAlign: "center" }}>
            <ListItem><Text as="span"><strong>Order ID:</strong> {orderDetails.customerId}</Text></ListItem>
            <ListItem><Text as="span"><strong>Email:</strong> {orderDetails.customerEmail}</Text></ListItem>
            <ListItem><Text as="span"><strong>Address:</strong> {orderDetails.customerAddress}</Text></ListItem>
          </List>
        </Box>

        <Box mt={6}>
          <Heading size="md" mb={2} textAlign="center">Car Details:</Heading>
          <List spacing={3} style={{ textAlign: "center" }}>
            <ListItem><Text as="span"><strong>Car Type:</strong> {orderDetails.carType}</Text></ListItem>
            <ListItem><Text as="span"><strong>Color:</strong> {orderDetails.carColor}</Text></ListItem>
            <ListItem><Text as="span"><strong>Battery Size:</strong> {orderDetails.carBattery}</Text></ListItem>
            <ListItem><Text as="span"><strong>Trailer Hitch:</strong> {orderDetails.carHitch ? 'Yes' : 'No'}</Text></ListItem>
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderConfirmation;
