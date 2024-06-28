import React from 'react'
import { Box, Text ,Flex} from '@chakra-ui/react';


const Content = () => {
  return (
    
    <Box bg="gray.100" p={2} color="gray.700" >
    <Flex alignItems="center" gap={10}p={2}>
      <Text fontWeight="bold" mr={5}>Popular on Groupon</Text>
      <Text fontSize="sm">+ Groupon is your place for savings and discovery while exploring fun activities in your city and around the country.Click here for Popular Categories.</Text>
    </Flex>
  </Box>
    
  )
}

export default Content
