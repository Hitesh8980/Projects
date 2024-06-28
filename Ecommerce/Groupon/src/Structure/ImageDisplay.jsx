import React from 'react';
import { Box, Image, Text, Button, Link, Flex } from '@chakra-ui/react';
import image1 from '../assets/images/image1.webp';
import image2 from '../assets/images/image2.webp';

const ImageDisplay = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" gap={{ base: '20px', md: '40px' }} p={4}>
      <Box w={{ base: '100%', md: '40%' }} overflow="hidden" position="relative" borderRadius="lg" boxShadow="md">
        <Link href="#" isExternal>
          <Image src={image2} alt="image" h="100%" w="100%" objectFit="contain" />
        </Link>
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.4)" color="black" p={{ base: 4, md: 8 }}>
          <Text fontSize={{ base: '24px', md: '32px' }} fontWeight="bold">
            Sunlit Cyber Sales!
          </Text>
          <Text fontSize={{ base: '14px', md: '16px' }}>Summer just got hotter</Text>
          <Text fontSize={{ base: '14px', md: '16px' }}>with cyber deals!</Text>
          <Button mt={{ base: 6, md: 9 }} p={3} bg="transparent" color="" borderRadius="6" _hover={{ bg: 'white.800' }} border={'1px solid black'}>
            See Deals
          </Button>
        </Box>
      </Box>
      <Box w={{ base: '100%', md: '40%' }} overflow="hidden" position="relative" borderRadius="lg" boxShadow="md" mt={{ base: 6, md: 0 }}>
        <Link href="#" isExternal>
          <Image src={image1} alt="image" h="100%" w="100%" objectFit="contain" />
        </Link>
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.4)" color="white" p={{ base: 4, md: 8 }}>
          <Text fontSize={{ base: '24px', md: '32px' }} fontWeight="bold">
            Groupon Your Gift-Guide
          </Text>
          <Text fontSize={{ base: '14px', md: '16px' }}>Shop, Save and Spread Joy!</Text>
          <Button mt={{ base: 6, md: 9 }} p={3} bg="tranparetn" color="white" borderRadius="6" _hover={{ bg: 'white.800' }} border={'1px solid black'}>
            See Deals
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ImageDisplay;
