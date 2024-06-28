import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Spinner,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularItems = async () => {
      try {
        const response = await axios.get("/db.json");
        setPopularItems(response.data.deals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular items:", error);
        setLoading(false);
      }
    };

    fetchPopularItems();
  }, []);

  const addToCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const selectedItem = popularItems.find((item) => item.id === id);

    if (selectedItem) {
      existingCart.push(selectedItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert("Item added to cart!");
    }
  };

  return (
    <Box p={4}>
      <Heading
        as="h1"
        size="xl"
        mb="6"
        fontWeight={800}
        fontSize={24}
        fontStyle={"normal"}
        color="rgb(52, 52, 52)"
      >
        <strong>Popular on Groupon</strong>
      </Heading>
      {loading ? (
        <Flex justify="center" align="center" minH="50vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" gap="4" justifyContent="space-around">
          {popularItems.map((deal) => (
            <Box
              key={deal.id}
              w={{ base: "100%", sm: "45%", md: "30%" }}
              overflow="hidden"
              mb="4"
            >
              <Link to={`/product/${deal.id}`}>
                <Image
                  src={deal.image}
                  alt={deal.title}
                  h="200px"
                  objectFit="cover"
                  borderRadius="lg"
                />
              </Link>
              <Box p="4">
                <Stack spacing="2">
                  <Heading as="h1" size="lg" mb="2">
                    {deal.title}
                  </Heading>
                  <Text fontSize="md" color="black">
                    {deal.description}
                  </Text>
                  <Text fontSize="md" color="green.600">
                    Price: {deal.price} off Up to 20-50%
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    style={{ color: "yellow" }}
                  >
                    Rating: {deal.rating}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {deal.bought}+ bought
                  </Text>
                  <Button
                    bg="white"
                    color="black"
                    border="1px solid black"
                    borderRadius={10}
                    _hover={{ bg: "green", color: "white" }}
                    onClick={() => addToCart(deal.id)}
                  >
                    Book online
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Popular;
