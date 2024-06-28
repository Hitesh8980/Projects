import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Select,
  VStack,
  HStack,
  Image,
  Link,
  useColorModeValue,
  chakra,
  Icon,
  Tooltip,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlayCircle,
} from "react-icons/fa";
import { FaStar, FaCircle, FaMapMarker, FaArrowRight } from "react-icons/fa";
import smalllogo from "../../assets/images/glogo.webp";
import owner from "../../assets/images/bomw.jpeg";
import GMlogo from "../../assets/images/GMlogo.jpeg";
import women from "../../assets/images/woman.jpeg";
import bgImage from "../../assets/images/bg.jpeg";

const Sell = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box bg={bg}>
      <Box boxShadow="lg">
        <Link href="/">
          <Image
            src={GMlogo}
            alt="Groupon Merchant Logo"
            w="250px"
            h="70px"
            p={4}
          />
        </Link>
      </Box>
      <Box
        dispaly="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          as="header"
          direction="column"
          align="left"
          justify="center"
          py={10}
          boxShadow="lg"
          p={10}
        >
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            Promote Your Business with Groupon Merchant
          </Heading>
          <Text fontSize="lg" color={color} mb={8}>
            Reach New Customers. Build Loyalty. Become a True Destination.
          </Text>
          <Text fontSize="xl" color="black" mb={8}>
            Get Started Today with $0 Upfront Costs!
          </Text>
          <VStack spacing={4} alignItems="flex-start">
            <Input placeholder="Business Name" borderColor={borderColor} />
            <Input placeholder="Business Address" borderColor={borderColor} />
            <Input placeholder="First & Last Name" borderColor={borderColor} />
            <Input placeholder="Email Address" borderColor={borderColor} />
            <Input placeholder="Phone Number" borderColor={borderColor} />
            <Input placeholder="Website" borderColor={borderColor} />
            <Select placeholder="Choose a category" borderColor={borderColor}>
              <option value="food">Food</option>
              <option value="beauty">Beauty</option>
              <option value="health">Health</option>
              <option value="retail">Retail</option>
            </Select>
            <Button
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
              _active={{ bg: "green.700" }}
              w="20"
              py={4}
              p={2}
            >
              Sign Up
            </Button>
          </VStack>
        </Flex>
      </Box>
      <Flex
        as="section"
        direction="row"
        align="center"
        justify="center"
        py={10}
        px={10}
        mb={10}
        gap={20}
      >
        <Box>
          <Image
            src={women}
            alt="Groupon Merchant Logo"
            w="500px"
            borderRadius={5}
          />
        </Box>
        <Box maxW="600px" mb={10}>
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            color="black"
            mb={4}
            p={6}
          >
            An Unmatched Way To Attract New Customers And Build Brand Loyalty
          </Heading>
          <Text fontSize="lg" color={color}>
            You have something unique to offer, and you need to reach the people
            who want to experience it. With Groupon Merchant, you can. We have
            one of the largest platforms in the world, and a tech-forward
            approach to getting your offer to the right people. Everyday
            excellence. Extraordinary experiences. No matter the need, you make
            it happen. We help you find visitors, and you give them something to
            remember.
          </Text>
        </Box>
      </Flex>
      <Box
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        w="70%"
        h="80%"
        py={1}
        px={10}
        borderRadius="md"
        mx="auto"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="60%"
          color="white"
          py={10}
          px={10}
          borderRadius="md"
          mx="auto"
        >
          <Heading
            as="h3"
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            mb={4}
          >
            Unmatched Reach. Unlimited Potential.
          </Heading>
          <HStack spacing={150}>
            <Text fontSize="7xl" fontWeight="bold">
              19M+
            </Text>
            <Text fontSize="7xl" fontWeight="bold">
              1M+
            </Text>
          </HStack>
          <HStack spacing={20} fontSize="md" fontWeight="bold" mt={2}>
            <Text>Active global customers</Text>
            <Text>Merchants worked with Groupon to date</Text>
          </HStack>
        </Flex>
      </Box>
      <Flex
        as="section"
        direction="row"
        align="center"
        justify="center"
        py={10}
        px={10}
        mb={10}
      >
        <Box maxW="600px" mb={10}>
          <Heading
            as="h3"
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            Groupon Is The Marketplace For Local Experiences
          </Heading>
          <Text fontSize="sm" color={color}>
            Groupon is more than a place to shop for deals. It's where customers
            around the world explore where to go, what to do, or what to buy
            today. Here's how Groupon Merchant helps promote your business.
          </Text>
        </Box>
        <Box>
          <VStack
            spacing={0}
            alignItems="center"
            justify="center"
            w="100"
            h="60%"
            bg="white"
            boxShadow="sl"
            rounded="lg"
            p={5}
          >
            <Box as="section" mb={8}>
              <Icon as={chakra(FaStar)} boxSize={5} color="green.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold" color={color}>
                Find New Audiences
              </Text>
              <Text fontSize="sm" color={color}>
                We invest millions in marketing campaigns across web and mobile
                to bring customers to the Groupon platform.
              </Text>
            </Box>
            <Divider
              sx={{ backgroundColor: "gray.200", height: "2px", marginY: 4 }}
            />
            <Box as="section" mb={8}>
              <Icon
                as={chakra(FaCircle)}
                boxSize={6}
                color="green.500"
                mr={2}
              />
              <Text fontSize="md" fontWeight="bold" color={color}>
                Boost Brand Loyalty
              </Text>
              <Text fontSize="sm" color={color}>
                Groupon is an all-in-one marketing solution with no upfront cost
                that helps your business to build brand recognition.
              </Text>
            </Box>
            <Divider
              sx={{ backgroundColor: "gray.200", height: "2px", marginY: 4 }}
            />
            <Box as="section" mb={8}>
              <Icon
                as={chakra(FaMapMarker)}
                boxSize={6}
                color="green.500"
                mr={2}
              />

              <Text fontSize="md" fontWeight="bold" color={color}>
                Become the Destination of Choice
              </Text>
              <Text fontSize="md" color={color}>
                People are always looking for their new favorite thing to do.
                We'll use our tools to help them find you.
              </Text>
              <Divider
                sx={{ backgroundColor: "gray.200", height: "2px", marginY: 4 }}
              />
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Flex
        as="section"
        direction="row"
        align="center"
        justify="center"
        py={10}
        px={10}
        mb={10}
        gap={100}
        boxShadow="lg"
        borderRadius={50}
        borderColor="black"
      >
        <Image
          src={owner}
          alt="Groupon Merchant Couple"
          w="100"
          h="300px"
          borderRadius="md"
          objectFit="cover"
        />
        <Box maxW="600px" mb={10}>
          <Heading
            as="h3"
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            Working With Groupon Merchant
          </Heading>
          <Text fontSize="lg" color={color}>
            Ok, but what's it actually like to work with Groupon Merchant? Learn
            more about the experience of becoming, well, an experience.
          </Text>
          <Link
            href="#"
            fontSize="md"
            fontWeight="bold"
            color="green.500"
            mt={2}
          >
            Learn more
          </Link>
        </Box>
      </Flex>
      <Flex
        as="footer"
        direction="column"
        align="center"
        justify="center"
        py={10}
        px={10}
        bg={bg}
      >
        <HStack spacing={8}>
          <Image src={smalllogo} alt="Groupon Merchant Logo" w="200px" />
          <VStack spacing={4} align="start">
            <Heading as="h4" fontSize="lg" fontWeight="bold" color="green.500">
              Merchant Success Stories
            </Heading>
            <Link href="#" fontSize="md" fontWeight="bold" color={color}>
              Sign Up Now!
            </Link>
            <Link href="#" fontSize="md" fontWeight="bold" color={color}>
              Investor Relations
            </Link>
            <Link href="#" fontSize="md" fontWeight="bold" color={color}>
              News & Events
            </Link>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h4" fontSize="lg" fontWeight="bold" color="green.500">
              FAQ & Help
            </Heading>
            <Link href="#" fontSize="md" fontWeight="bold" color={color}>
              About Groupon
            </Link>
            <Link href="#" fontSize="md" fontWeight="bold" color={color}>
              Careers at Groupon
            </Link>
          </VStack>
          <VStack spacing={4} align="start">
            <Heading as="h4" fontSize="lg" fontWeight="bold" color="green.500">
              Subscribe for Updates
            </Heading>
            <Input placeholder="Email" borderColor={borderColor} w="200px" />
            <Button
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
              _active={{ bg: "green.700" }}
              rightIcon={<Icon as={FaArrowRight} />}
            >
              Submit
            </Button>
          </VStack>
        </HStack>
        <HStack spacing={8} mt={8}>
          <HStack spacing={4}>
            <Tooltip label="Facebook">
              <Icon as={FaFacebook} boxSize={6} color="gray.500" />
            </Tooltip>
            <Tooltip label="Instagram">
              <Icon as={FaInstagram} boxSize={6} color="gray.500" />
            </Tooltip>
            <Tooltip label="LinkedIn">
              <Icon as={FaLinkedin} boxSize={6} color="gray.500" />
            </Tooltip>
            <Tooltip label="Play">
              <Icon as={FaPlayCircle} boxSize={6} color="gray.500" />
            </Tooltip>
          </HStack>
          <Spacer />

          <HStack spacing={4}>
            <Link href="#" fontSize="sm" fontWeight="bold" color={color}>
              Terms of Use
            </Link>
            <Link href="#" fontSize="sm" fontWeight="bold" color={color}>
              Privacy Policy
            </Link>
          </HStack>
        </HStack>
        <Divider
          sx={{ backgroundColor: "gray.200", height: "2px", marginY: 4 }}
        />
        <Text fontSize="sm" color={color} mt={4}>
          ©2022-2024 Groupon, Inc. All Rights Reserved. GROUPON is a registered
          trademark of Groupon, Inc.
        </Text>
      </Flex>
    </Box>
  );
};

export default Sell;
