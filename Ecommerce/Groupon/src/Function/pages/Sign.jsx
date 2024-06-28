import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  Link,
  HStack,
  Stack,
  useColorModeValue,
  IconButton,
  Spacer,
  Center,
  Divider,
  Box,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import Navbar from '../../Structure/Navbar'

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Box>
    <Navbar/>
    <Box display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow={'lg'}>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={bg}
      minH="60vh"
      p={10}
      boxShadow={'lg'}
      border='1px solid black'
      w={'50%'}
      m={50}
    >
      <Heading as="h1" fontSize="48px" mb={8} textAlign="center" fontWeight='bold'>
        Sign in to score great deals!
      </Heading>
      <Stack spacing={4} mb={8}>
        <Flex>
          <Button
            variant="outline"
            size="sm"
            flex="1"
            borderRadius="md"
            _active={{ bg: "green.500" }}
            _hover={{
              borderBottom: '1px solid green',
            }}
            onClick={() => console.log("I have an account")}
          >
            I HAVE AN ACCOUNT
          </Button>
          <Spacer />
          <Button
            variant="outline"
            size="sm"
            flex="1"
            borderRadius="md"
            _active={{ bg: "green.500" }}
            _hover={{
              borderBottom: '1px solid green',
            }}
            onClick={() => console.log("I'm a new customer")}
          >
            I'M A NEW CUSTOMER
          </Button>
        </Flex>
        <Input
          type="email"
          placeholder="Email"
          borderRadius="md"
          size="lg"
          boxShadow='sm'
          border='1px solid black'
          pl={180}
          
        />
        <HStack spacing={4} >
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            borderRadius="md"
            size="lg"
            boxShadow='sm'
            pl={40}
            w='100%'
            border='1px solid black'
            
          />
          <IconButton
            icon={showPassword ? "view-off" : "view"}
            onClick={handleTogglePasswordVisibility}
          />
        </HStack>
        <Link
          href="#"
          color="teal.500"
          fontSize="sm"
          _hover={{ textDecor: "none" }}
        >
          Forgot your password?
        </Link>
        <Checkbox
          defaultChecked={false}
          size="lg"
          borderRadius="md"
          colorScheme="green"
        >
          Keep me signed in on this computer
        </Checkbox>
        <Text fontSize="sm" textAlign="center" mt={2}>
          By clicking below, I agree to the{" "}
          <Link href="#" color="teal.500" fontSize="sm">
            Terms of Use
          </Link>{" "}
          and have read the{" "}
          <Link href="#" color="teal.500" fontSize="sm">
            Privacy Statement.
          </Link>
        </Text>
        <Button
          size="lg"
          
          bg="green.500"
          color="white"
          _hover={{ bg: "green.600" }}
          onClick={() => console.log("Sign in")}
          p={4}
        >
          Sign In
        </Button>
        <Divider sx={{ backgroundColor: 'gray.200', height: '2px', marginY: 4 }}/>
        <Text fontSize="sm" textAlign="center" mt={2}>
          or
        </Text>
        <HStack spacing={4} w="full" justifyContent="center">
          <Button
            variant="outline"
            leftIcon={<FaFacebook />}
            size="lg"
            borderRadius="md"
            onClick={() => console.log("Sign in with Facebook")}
          >
            Facebook
          </Button>
          <Button
            variant="outline"
            leftIcon={<FaGoogle />}
            size="lg"
            borderRadius="md"
            onClick={() => console.log("Sign in with Google")}
          >
            Google
          </Button>
        </HStack>
      </Stack>
    </Flex>
    </Box>
    </Box>
  );
}

export default SignUpForm;