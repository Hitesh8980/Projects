import React, { useState, useEffect } from 'react';
import Navbar from '../../Structure/Navbar';
import Footer from '../../Structure/Footer';
import { Box, Button, Image, Text, VStack, HStack, Flex, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    return storedItems.map(item => ({
      ...item,
      quantity: item.quantity || 1, 
    }));
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const handleAddToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      cartItems.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setItems(cartItems);
  };

  const handleRemove = (index) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setItems(cartItems);
  };

  const handleIncreaseQuantity = (index) => {
    let cartItems = [...items];
    cartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setItems(cartItems);
  };

  const handleDecreaseQuantity = (index) => {
    let cartItems = [...items];
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(cartItems));
      setItems(cartItems);
    }
  };

  const parsePrice = (priceString) => {
    if (!priceString) return 0; 
    return parseFloat(priceString.replace('$', ''));
  };

  const parseDiscountedPrice = (discountedPriceString) => {
    if (!discountedPriceString) return 30; 
    return parseFloat(discountedPriceString.replace('$', ''));
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      const discountedPrice = parseDiscountedPrice(item.discountedPrice);
      return total + discountedPrice * item.quantity;
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <Box>
      <Navbar />
      <Box p={5}>
        <Text fontSize={{ base: 'xl', md: '2xl' }} mb={5}>
          Shopping Cart ({items.length} {items.length === 1 ? 'Item' : 'Items'})
        </Text>
        {items.length === 0 ? (
          <Text>No items in the cart</Text>
        ) : (
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
            <Flex flexWrap="wrap" justifyContent="space-between" alignItems={{ base: 'flex-start', md: 'center' }}>
              {items.map((item, index) => (
                <HStack key={index} justifyContent="space-between" p={5} borderWidth="1px" borderRadius="md" mb={5} w="100%">
                  <HStack>
                    <Image boxSize={{ base: '100px', md: '200px' }} src={item.image} alt={item.name} />
                    <VStack align="start">
                      <Text fontSize={{ base: 'md', md: 'lg' }}>{item.title}</Text>
                      <Text>Qty: {item.quantity}</Text>
                      <HStack>
                        <Button colorScheme="blue" variant="outline" onClick={() => handleDecreaseQuantity(index)}>
                          -
                        </Button>
                        <Text>{item.quantity}</Text>
                        <Button colorScheme="blue" variant="outline" onClick={() => handleIncreaseQuantity(index)}>
                          +
                        </Button>
                      </HStack>
                    </VStack>
                  </HStack>
                  <VStack align="end">
                    <Text as="s" color="gray.500">Price: ${parsePrice(item.price)}</Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="green.500">Discounted Price: $30</Text>
                    <Text color="red.500">You Save ${parsePrice(item.price) - 30}</Text>
                    
                    <Button colorScheme="red" variant="outline" onClick={() => handleRemove(index)}>
                      Remove
                    </Button>
                  </VStack>
                </HStack>
              ))}
            </Flex>
            <Box p={5} borderWidth="1px" borderRadius="md" width={{ base: '100%', md: '30%' }}>
              <Text fontSize={{ base: 'xl', md: '2xl' }}>Cart Summary</Text>
              <Text>Subtotal ({items.length} {items.length === 1 ? 'Item' : 'Items'}): ${calculateTotal(items)}</Text>
              <Text>Estimated shipping: See in checkout</Text>
              <Text>Estimated taxes: See in checkout</Text>
              <Divider my={4} />
              <Text fontSize={{ base: 'xl', md: '2xl' }}>Cart Subtotal: ${calculateTotal(items)}</Text>
              <Button as={Link} to="/signin" colorScheme="blue" mt={3} onClick={handleCheckout} bg={'blue'} borderRadius={10} p={4} _hover={{ bg: 'blue', color: 'white' }}>
                Proceed to Checkout
              </Button>
            </Box>
          </Flex>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;
