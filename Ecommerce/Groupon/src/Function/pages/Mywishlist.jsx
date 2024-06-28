import React, { useEffect, useState } from 'react'
import Navbar from '../../Structure/Navbar'
import { Box, Heading, Spinner } from '@chakra-ui/react';
import Footer from '../../Structure/Footer';

const Mywishlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 
  }, []);
  return (
    <Box>
      <Navbar/>
      <Heading fontSize={30} p={4}>Hi There! there its your wish list</Heading>
      
      <Box h={500}>
      {isLoading ? (
        <Spinner
          thickness="100px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="6xl"
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spin 
        />
      ) : null}
      </Box>
      <Footer />

    </Box>
  )
}

export default Mywishlist
