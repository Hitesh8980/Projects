import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

function TransitionExample({ isOpen, onOpen, onClose }) {
  const handleLogin = () => {
    // Handle login logic here (e.g., authentication with Google/Facebook)
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen}>Sign In</Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button colorScheme="blue" onClick={handleLogin}>
                Sign In
              </Button>
              <HStack spacing={4}>
                <IconButton
                  aria-label="Login with Google"
                  icon={<FaGoogle />}
                  onClick={() => {
                  }}
                />
                <IconButton
                  aria-label="Login with Facebook"
                  icon={<FaFacebook />}
                  onClick={() => {
                  }}
                />
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TransitionExample;
