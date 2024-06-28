import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  useColorModeValue,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { FaFire, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrendingGIfts = () => {
  const [deals, setDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 3;
  const { colorMode } = useColorMode();
  const pageButtonBgColor = useColorModeValue(".200", "gray.700");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/db.json");
        if (response.data && response.data.deals) {
          setDeals(response.data.deals);
        } else {
          console.error(
            "Error: Unable to fetch deals - no data or deals array found in response."
          );
        }
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchData();
  }, []);

  // Logic to paginate deals
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  const currentDeals = deals.slice(indexOfFirstDeal, indexOfLastDeal);

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box p={{ base: "4", md: "6" }} bg="#fef5e9">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={{ base: "2", md: "4" }}
      >
        <Flex alignItems="center">
          <FaFire size={24} color="#ed4c2f" style={{ marginRight: "10px" }} />
          <Heading
            as="h3"
            size="lg"
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight={800}
          >
            Trending Gifts
          </Heading>
        </Flex>

        {/* Pagination controls with arrows */}
        <Flex alignItems="center">
          <Button
            mx="1"
            onClick={() => paginate(currentPage - 1)}
            colorScheme="blue"
            bg={pageButtonBgColor}
            _hover={{ bg: colorMode === "light" ? "red.300" : "gray.600" }}
            _active={{ bg: colorMode === "light" ? "red.400" : "gray.500" }}
            disabled={currentPage === 1}
            leftIcon={<FaArrowLeft />}
          >
            Previous
          </Button>
          <Button
            mx="1"
            onClick={() => paginate(currentPage + 1)}
            colorScheme="blue"
            bg={pageButtonBgColor}
            _hover={{ bg: colorMode === "light" ? "blue.300" : "gray.600" }}
            _active={{ bg: colorMode === "light" ? "blue.400" : "gray.500" }}
            disabled={indexOfLastDeal >= deals.length}
            rightIcon={<FaArrowRight />}
          >
            Next
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexWrap={{ base: "wrap", md: "nowrap" }}
        gap={{ base: "4", md: "20px" }}
      >
        {currentDeals.map((deal) => (
          <Box
            key={deal.id}
            w={{ base: "100%", md: "30%" }}
            overflow="hidden"
            mb={{ base: "4", md: "0" }}
          >
            <Link to={`/product/${deal.id}`}>
              <Image
                src={deal.image}
                alt={deal.title}
                h="200px"
                w="100%"
                objectFit="cover"
                borderRadius="lg"
              />
            </Link>
            <Box p="4">
              <Stack spacing="2">
                <Heading as="h1" size="md" mb="2" fontSize="20px">
                  {deal.title}
                </Heading>
                <Text fontSize="md">{deal.description}</Text>
                <Text fontSize="sm" color="gray.600">
                  Price: {deal.price}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Rating: {deal.rating}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {deal.bought}+ bought
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TrendingGIfts;
