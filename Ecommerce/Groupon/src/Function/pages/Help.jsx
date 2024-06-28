import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";
import Navbar from "../../Structure/Navbar";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../../Structure/Footer";

const CustomerSupport = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mb={4}
      p={10}
      bg="#53a318"
    >
      <Flex alignItems="center">
  <FaQuestionCircle size={24} color="black" mr={2} />
  <Heading
    as="h1"
    size="464px"
    color="white"
    fontFamily="Open Sans"
    fontWeight="bold"
  >
    CUSTOMER SUPPORT
  </Heading>
</Flex>
    </Flex>
  );
};

const ContentSection = () => {
  return (
    <Box mx='auto' w="80%" mb='8'>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={8}
        bg="#f0f0f0"
      >
        <Heading as="h3" size="lg" mb={4}>
          Need help?
        </Heading>
        <Text mb={4} textAlign="center">
          We have the answers you are looking for. Log in to manage all of your
          purchases.
        </Text>
        <Button
          as={RouterLink}
          to="/signin"
          color="white"
          bg="#53a318"
          borderRadius={10}
          p={4}
          mt={4}
          variant="solid"
        >
          Log in
        </Button>
      </Flex>
    </Box>
  );
};

const Section = ({ title, items }) => {
  return (
    <Box p={8} mx="auto" w={{ base: "90%", md: "80%" }} borderRadius="md" mb={8} >
      <Heading as="h4" size="md" mb={4}>
        {title}
      </Heading>
      <List spacing={3}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as="dot" listStyleType="disc" />
            <Link href="#" color='green'>{item}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Help = () => {
  const introductionItems = [
    "Account Basics",
    "Buying Groupons",
    "Getting Started with Groupon",
    "Using Groupons",
    "Your Business on Groupon",
  ];
  const buyingItems = [
    "Browsing and Shopping",
    "Checkout Troubleshooting",
    "Payment Information",
    "Promo Codes and Promotions",
  ];
  const usingItems = [
    "Finding and Using Your Groupon",
    "Trouble Using Your Groupon",
  ];
  const accountItems = [
    "Account Troubleshooting",
    "Making a Change to Your Purchase",
    "Refunds, Cancellations, and Returns",
    "Rights and Data Privacy Policies",
    "Your Account Preferences",
  ];
  const getawaysItems = ["Getaways Hotels and Travel"];
  const concertItems = ["GrouponLive Concerts and Events"];
  const marketplaceItems = ["Buying Groupon Goods Marketplace Deals"];
  const giftsItems = ["Gifting"];

  return (
    <Box>
      <Navbar />
      <CustomerSupport />
      <ContentSection />
      <SimpleGrid columns={3} spacing={4} mt={8}>
        <Section title="Introduction to Groupon" items={introductionItems} />
        <Section title="Buying a Groupon" items={buyingItems} />
        <Section title="Using a Groupon" items={usingItems} />
      </SimpleGrid>
      <SimpleGrid columns={3} spacing={4} mt={8}>
        <Section
          title="Managing your Account and Orders"
          items={accountItems}
        />
        <Section title="Getaways Hotels and Travel" items={getawaysItems} />
        <Section title="GrouponLive Concert and Events" items={concertItems} />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={4} mt={8}>
        <Section
          title="Groupon Goods Marketplace Orders"
          items={marketplaceItems}
        />
        <Section title="Groupon Gifts" items={giftsItems} />
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default Help;
