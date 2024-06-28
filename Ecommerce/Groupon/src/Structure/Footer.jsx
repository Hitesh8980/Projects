import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Stack,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Box,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

function Footer() {
  const bg = useColorModeValue("gray.50", "gray.800");
  const text = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box>
    <Box
      as="footer"
      bg={bg}
      color={text}
      py={10}
      borderTopWidth={1}
      borderColor={borderColor}
      textAlign="center"
    >
      <Stack
        as="main"
        spacing={5}
        direction={{ base: "column", md: "row" }}
        justify="center"
        bg="#230f33"
        color="white"
      >
        <Stack spacing={4} p={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Customer Support</Heading>
          <Button variant="solid" colorScheme="blue" borderRadius={5} border="1px solid white" w={60} maxWidth="300px" mx="auto">
            Help Center
          </Button>
          <Link href="#">Refund Policies</Link>
          <Link href="#">Report Infringement</Link>
          <Link href="#">Merchant Class Action Settlement Notice</Link>
        </Stack>
        <Stack spacing={4} p={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Sell On Groupon</Heading>
          <Link href="#">Join Groupon's Marketplace</Link>
          <Link href="#">Run a Groupon Campaign</Link>
          <Link href="#">How Groupon Works for Merchants</Link>
          <Link href="#">Advertise Your Campaign</Link>
          <Link href="#">Affiliate Program</Link>
          <Link href="#">Vendor Code of Conduct</Link>
        </Stack>
        <Stack spacing={4} p={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Company</Heading>
          <Link href="#">About</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Press</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Management Team</Link>
        </Stack>
        <Stack spacing={4} p={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Quick Links</Heading>
          <Link href="#">Treat yourself +</Link>
          <Link href="#">Things to do +</Link>
          <Link href="#">Coupons +</Link>
          <Link href="#">Gifts for Occasions +</Link>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        as="footer"
        spacing={30}
        direction={{ base: "column", md: "row" }}
        justify="center"
        py={5}
        bg="#f8f7fa"
      >
        <Stack spacing={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Follow Us</Heading>
          <Flex as="nav" direction="row" spacing="5" align="center" justify="center">
            <Link href="#">
              <FaFacebookSquare fontSize="sm" />
            </Link>
            <Link href="#">
              <FaInstagramSquare fontSize="sm" />
            </Link>
            <Link href="#">
              <FaTwitterSquare fontSize="sm" />
            </Link>
          </Flex>
        </Stack>
        <Stack spacing={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Groupon Sites</Heading>
          <InputGroup maxWidth="300px" mx="auto">
            <InputLeftElement pointerEvents="none" />
            <Input
              type="text"
              readOnly
              placeholder="USA"
              bg="transparent"
              border="1px solid black"
              p={2}
              borderRadius={10}
            />
          </InputGroup>
        </Stack>
        <Stack spacing={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Scan for the Groupon App</Heading>
          <Box display="flex" flexDirection="row" gap={2} maxWidth="300px" mx="auto">
            <Image
              src="https://img.grouponcdn.com/sls/3pA72nHCtnUsjckH8KU4GvEKzzt/3p-83x82"
              alt="Groupon App QR Code"
              w={20}
            />
            <Button
              variant="outline"
              colorScheme="blue"
              border="1px solid black"
              borderRadius={10}
              p={5.5}
              w={20}
              h={8}
            >
              Learn More
            </Button>
          </Box>
        </Stack>
        <Stack spacing={4} maxW={{ base: "100%", md: "25%" }}>
          <Heading size="lg">Sign up for the latest deals</Heading>
          <Box maxWidth="300px" mx="auto">
            <InputGroup>
              <Input
                type="text"
                placeholder="Email Address"
                border="1px solid black"
                p={2}
                borderRadius={10}
              />
            </InputGroup>
          </Box>
          <Text fontSize="xs">
            By subscribing, I agree to the <Link href="#">Terms of Use</Link>{" "}
            and have read the <Link href="#">Privacy Statement</Link>.
          </Text>
        </Stack>
      </Stack>
      
    </Box>
    <Box textAlign="center" fontSize="xl" color="gray.500" boxShadow="lg" h={30}>
      © 2024 Groupon, Inc. All Rights Reserved.
      <Link href="#" fontSize="xs" color="gray.500">
        Terms of Use
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Privacy Policy
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Interest-Based Ads
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Licenses
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Accessibility
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Do Not Sell or Share My Personal Information
      </Link>{" "}
      |
      <Link href="#" fontSize="xs" color="gray.500">
        Sitemap
      </Link>
    </Box>
    </Box>
  );
}

export default Footer;