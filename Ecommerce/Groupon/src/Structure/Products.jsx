import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import  { deals } from '/db.json';
import { Box, Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Footer from './Footer';


const Products = () => {
    const { id } = useParams();
    const [Products, setProducts] = useState(null);

  useEffect(() => {
    const foundProduct = deals.find(deal => deal.id === parseInt(id, 10));
    if (foundProduct) {
      setProducts(foundProduct);
    } else {
      console.log(`Product with id ${id} not found`);
    }
  }, [id]); 
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(Products);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Item added to cart!');
  };

  if (!Products) {
    return <div>Product not found!</div>;
  }
  return (
    <Box>
    <Navbar/>
    <Flex
    direction={{ base: 'column', md: 'row' }}
    gap={{base:'300',md:'150'}}
    mb={1}>

        <Box p="6" maxWidth={{ base: '100%', md: '40%' }} textAlign="center"
        >
      <Image src={Products.image} alt={Products.title} objectFit="cover" borderRadius="lg" />
      <Box  mt={{ base: 8, md: 0 }} ml={{ md: 8 }} flex='1'>
        <Heading as="h1" size="lg">{Products.title}</Heading>
        <Text fontSize="md" mt="2">{Products.description}</Text>
        <Text fontSize="sm" color="gray.600">Price: {Products.price}</Text>
        <Text fontSize="sm" color="gray.600">Rating: {Products.rating}</Text>
        <Text fontSize="sm" color="gray.600">{Products.bought}+ bought</Text>
      </Box>
    </Box>
        <Box mt="4"
        boxShadow="lg"
        p={4}
        gap={6}
        >
          <Heading as="h1" size="3xl">{Products.title}</Heading>
          <Text fontSize="md" mt="2">{Products.description}</Text>
          <Text fontSize="sm" color="gray.600">Original Price: $150</Text>
          <Text fontSize="sm" color="gray.600">Discounted Price: $99</Text>
          <Text fontSize="sm" color="gray.600">You Save: 41% Off</Text>
          <Text fontSize="sm" color="gray.600">Price with promo: $84.64 (18 hours left)</Text>
          <Text fontSize="sm" color="gray.600">Extra $9.90 off, today only</Text>
          <Text fontSize="sm" color="gray.600">Extra $4.46 off</Text>
          <Text fontSize="sm" color="gray.600">Promo Code: PROMO (Ends 6/27)</Text>
          <Text fontSize="sm" color="gray.600">Sale ends in: 17:57:00</Text>
          <Text fontSize="sm" color="gray.600">{Products.bought}+ bought</Text>
          <Button bg='blue' p={3} w="100%" borderRadius={5} color="white">Buy Now</Button>
          <Divider p={4}/>
          <Button border='1px solid blue' p={3} w="100%" borderRadius={5} color="blue" _hover={{ bg: 'blue', color: 'white' }} onClick={addToCart}>ADD TO CART</Button>
        </Box>
    </Flex>
    <Footer />
    </Box>
      
    
  )
}

export default Products

