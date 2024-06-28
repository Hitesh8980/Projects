import { Box, Flex, Link, Divider } from "@chakra-ui/react";
import React from "react";

const Smallbody = () => {
  return (
    <Box p={3} bg="#e8fcea">
      <Flex justifyContent="space-around">
        <Box>
          <Link fontSize="sm" fontWeight="bold" color="green.500">
            Sunlit Cyber Monday! Up to 10% Off Selected Deals!
          </Link>
          <Link fontSize="sm" color="green.500">
            USE CODE PROMO
          </Link>
        </Box>
        |
        <Box>
          <Link fontSize="sm" fontWeight="bold" color="green.500">
            Adventure Calls! A world of parks, just a click away!|
          </Link>
        </Box>
        |
        <Box>
          <Link fontSize="sm" fontWeight="bold" color="green.500">
            Ultimate Hair Care Deal! Save 40% on Pureology
          </Link>
          <Link fontSize="sm" color="green.500">
            Shampoo and Conditioner
          </Link>
        </Box>
      </Flex>
      <Divider mt={4} borderColor="black" />
    </Box>
  );
};

export default Smallbody;
