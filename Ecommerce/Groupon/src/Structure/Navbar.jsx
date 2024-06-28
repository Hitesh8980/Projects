import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Stack,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Badge,
  Grid,
  Text,
  VStack,
  HStack,
  MenuGroup,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { searchDeals } from "../Function/Search";
import image3 from "../assets/images/HotelsNavbar.png";
import TransitionExample from "./SignIn";
import { Link as RouterLink } from "react-router-dom";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Navbar = () => {
  const giftingDisclosure = useDisclosure();
  const localDisclosure = useDisclosure();
  const goodsDisclosure = useDisclosure();
  const travelDisclosure = useDisclosure();
  const couponDisclosure = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setDeals(data.deals));
  }, []);

  useEffect(() => {
    if (debouncedSearchQuery) {
      const filtered = searchDeals(deals, debouncedSearchQuery);
      setFilteredDeals(filtered);
      setIsModalOpen(true);
    } else {
      setFilteredDeals([]);
      setIsModalOpen(false);
    }
  }, [debouncedSearchQuery, deals]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleQrCode = () => {
    setIsQrCodeOpen(!isQrCodeOpen);
  };

  return (
    <Box bg={"#230f33"} px={4} textAlign="center">
      <Flex h={160} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems="center" flex="1">
          <Link as={RouterLink} to="/">
            <Box fontWeight="bold" color="white" mr={4} fontSize={24} fontFamily="sans-serif"  >
              GROUPON
            </Box>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="purple.600"
              color="white"
              ml={4}
              borderRadius="md"
              display={{ base: "none", md: "inline-flex" }}
            >
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem
                onMouseEnter={giftingDisclosure.onOpen}
                onMouseLeave={giftingDisclosure.onClose}
                boxShadow="md"
                py={2}
                zIndex={999}
                bg="white"
                borderRadius="md"
              >
                Gifting
                <MenuList
                  onMouseEnter={giftingDisclosure.onOpen}
                  onMouseLeave={giftingDisclosure.onClose}
                  hidden={!giftingDisclosure.isOpen}
                  position="absolute"
                  mt={-8}
                  ml={-1}
                  boxShadow="md"
                  py={2}
                  zIndex={999}
                  bg="white"
                  borderRadius="md"
                >
                  <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
                    <VStack align="start">
                      <Text fontWeight="bold">By recipient</Text>
                      <Link href="#">For Him</Link>
                      <Link href="#">For Her</Link>
                      <Link href="#">For Kids</Link>
                      <Link href="#">For Couples</Link>
                      <Link href="#">For Pets</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">By interest</Text>
                      <Link href="#">For Foodies</Link>
                      <Link href="#">For Relaxing</Link>
                      <Link href="#">For Care</Link>
                      <Link href="#">For Sport Fans</Link>
                      <Link href="#">For Fun</Link>
                      <Link href="#">For Housewarming</Link>
                      <Link href="#">For Travelers</Link>
                      <Link href="#">For Learning</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">More</Text>
                      <Link href="#">Gift Cards</Link>
                      <Link href="#">Personalized</Link>
                    </VStack>
                  </Grid>
                </MenuList>
              </MenuItem>

              <MenuItem
                onMouseEnter={localDisclosure.onOpen}
                onMouseLeave={localDisclosure.onClose}
                boxShadow="md"
                py={2}
                zIndex={999}
                bg="white"
                borderRadius="md"
              >
                Local
                <MenuList
                  onMouseEnter={localDisclosure.onOpen}
                  onMouseLeave={localDisclosure.onClose}
                  hidden={!localDisclosure.isOpen}
                  position="absolute"
                  mt={-8}
                  ml={-1}
                  boxShadow="md"
                  py={2}
                  zIndex={999}
                  bg="white"
                  borderRadius="md"
                >
                  <Grid templateColumns="repeat(6, 1fr)" gap={6} p={4}>
                    <VStack align="start">
                      <Text fontWeight="bold">By Beauty&spas</Text>
                      <Link href="#">Face & Skin Care</Link>
                      <Link href="#">Massage</Link>
                      <Link href="#">Salons</Link>
                      <Link href="#">Cosmetics Procedure</Link>
                      <Link href="#">Hair Removal</Link>
                      <Link href="#">Brows & Lashes</Link>
                      <Link href="#">Spas</Link>
                      <Link href="#">Hair & Styling</Link>
                      <Link href="#">Nails & Salons</Link>
                      <Link href="#">Blowout & Styling</Link>
                      <Link href="#">Tanning</Link>
                      <Link href="#">Makeup</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Things To Do</Text>
                      <Link href="#">Kids Activites</Link>
                      <Link href="#">Fun & Lesiure</Link>
                      <Link href="#">Tickets & Events</Link>
                      <Link href="#">Sighteseing & Tours</Link>
                      <Link href="#">Sports & Outdoors</Link>
                      <Link href="#">Night Life</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Food & Drink</Text>
                      <Link href="#">Restraunt</Link>
                      <Link href="#">Breweries,Wineries&Distilleries</Link>
                      <Link href="#">Cafes & Treats</Link>
                      <Link href="#">Groceries & Marekts</Link>
                      <Link href="#">Bars</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Health & Fitness</Text>
                      <Link href="#">Gyms</Link>
                      <Link href="#">Weighloss</Link>
                      <Link href="#">Fitness Classes</Link>
                      <Link href="#">Medical</Link>
                      <Link href="#">Natural Medicine</Link>
                      <Link href="#">Dental</Link>
                      <Link href="#">Sports</Link>
                      <Link href="#">Visions</Link>
                    </VStack>
                    <hr />
                    <VStack align="start">
                      <Text fontWeight="bold">More</Text>
                      <Link href="#">Automotive</Link>
                      <Link href="#">Home Services</Link>
                      <Link href="#">Meal prep&wine Delivery</Link>
                      <Link href="#">Online Learning</Link>
                      <Link href="#">Personal Services</Link>
                      <Link href="#">Personalised Items</Link>
                      <Link href="#">Retail</Link>
                    </VStack>
                  </Grid>
                </MenuList>
              </MenuItem>

              <MenuItem
                onMouseEnter={goodsDisclosure.onOpen}
                onMouseLeave={goodsDisclosure.onClose}
                boxShadow="md"
                py={2}
                zIndex={999}
                bg="white"
                borderRadius="md"
              >
                Goods
                <MenuList
                  onMouseEnter={goodsDisclosure.onOpen}
                  onMouseLeave={goodsDisclosure.onClose}
                  hidden={!goodsDisclosure.isOpen}
                  position="absolute"
                  mt={-8}
                  ml={-1}
                  boxShadow="md"
                  py={2}
                  zIndex={999}
                  bg="white"
                  borderRadius="md"
                >
                  <Grid templateColumns="repeat(6, 1fr)" gap={6} p={4}>
                    <VStack align="start">
                      <Text fontWeight="bold">Health & Beauty</Text>
                      <Link href="#">AromaTherapy</Link>
                      <Link href="#">Bath&Body</Link>
                      <Link href="#">Cosmetics</Link>
                      <Link href="#">Fragrance</Link>
                      <Link href="#">Hair Care</Link>
                      <Link href="#">Health Care</Link>
                      <Link href="#">Massage</Link>
                      <Link href="#">Mens's Health & Beauty</Link>
                      <Link href="#">Oral Care</Link>
                      <Link href="#">Personal Care</Link>
                      <Link href="#">Sexual Wellness</Link>
                      <Link href="#">Shaving & Grooming</Link>
                      <Link href="#">Skin Care</Link>
                      <Link href="#">Vitamins & Supplements</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">For the Home</Text>
                      <Link href="#">Art</Link>
                      <Link href="#">Bath</Link>
                      <Link href="#">Bedding</Link>
                      <Link href="#">FLoor Care& CLeaning</Link>
                      <Link href="#">Furniture</Link>
                      <Link href="#">Heating,Cooling&Air Quality</Link>
                      <Link href="#">Home Appliances</Link>
                      <Link href="#">Home Decor</Link>
                      <Link href="#">Kitchen& Dinning</Link>
                      <Link href="#">Luggage</Link>
                      <Link href="#">Mattress & Accessories</Link>
                      <Link href="#">Office & School Supplies</Link>
                      <Link href="#">OutDoor Decor</Link>
                      <Link href="#">Patio & Garden</Link>
                      <Link href="#">Seasonal Decor</Link>
                      <Link href="#">Storage & Organization</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Women's Fashion</Text>
                      <Link href="#">Intimates</Link>
                      <Link href="#">Maternity Clothing</Link>
                      <Link href="#">Plus Size Clothing</Link>
                      <Link href="#">Women Accessories</Link>
                      <Link href="#">Women's Clothing</Link>
                      <Link href="#">Women's Shoes</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Men's Fashion</Text>
                      <Link href="#">Men's Accessories</Link>
                      <Link href="#">MEn's Clothes</Link>
                      <Link href="#">Men's Shoes</Link>
                    </VStack>
                    <hr />
                    <VStack align="start">
                      <Text fontWeight="bold">More</Text>
                      <Link href="#">Auto & Home Improvement</Link>
                      <Link href="#">Baby & Kids</Link>
                      <Link href="#">Electronics</Link>
                      <Link href="#">Entertainnment</Link>
                      <Link href="#">Grocery & HouseHolds</Link>
                      <Link href="#">Jewelry & Watches</Link>
                      <Link href="#">Personalized Items</Link>
                      <Link href="#">Pet Supplies</Link>
                      <Link href="#">Sports & Outdoors</Link>
                      <Link href="#">Toys</Link>
                    </VStack>
                  </Grid>
                </MenuList>
              </MenuItem>

              <MenuItem
                onMouseEnter={travelDisclosure.onOpen}
                onMouseLeave={travelDisclosure.onClose}
                boxShadow="md"
                py={2}
                zIndex={999}
                bg="white"
                borderRadius="md"
              >
                Hotels & Travel
                <MenuList
                  onMouseEnter={travelDisclosure.onOpen}
                  onMouseLeave={travelDisclosure.onClose}
                  hidden={!travelDisclosure.isOpen}
                  position="absolute"
                  mt={-8}
                  ml={-1}
                  boxShadow="md"
                  py={2}
                  zIndex={999}
                  bg="white"
                  borderRadius="md"
                >
                  <Grid templateColumns="repeat(6, 1fr)" gap={6} p={4}>
                    <VStack align="start">
                      <Text fontWeight="bold"></Text>
                      <Link href="#">Air-Inclusive Trips</Link>
                      <Link href="#">Beach</Link>
                      <Link href="#">Premium</Link>
                      <Link href="#">Family Fun</Link>
                      <Link href="#">Internationals Tours</Link>
                      <Link href="#">Under $99</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold"></Text>
                      <Link href="#">New Deals</Link>
                      <Link href="#">Outdoors & Adventure</Link>
                      <Link href="#">Romantic Gateways</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">More</Text>
                      <Image src={image3} h="50%" w="100%" />
                    </VStack>
                  </Grid>
                </MenuList>
              </MenuItem>

              <MenuItem
                onMouseEnter={couponDisclosure.onOpen}
                onMouseLeave={couponDisclosure.onClose}
                boxShadow="md"
                py={2}
                zIndex={999}
                bg="white"
                borderRadius="md"
              >
                Coupons
                <MenuList
                  onMouseEnter={couponDisclosure.onOpen}
                  onMouseLeave={couponDisclosure.onClose}
                  hidden={!couponDisclosure.isOpen}
                  position="relative"
                  mt={-8}
                  ml={-1}
                  boxShadow="md"
                  py={2}
                  zIndex={999}
                  bg="white"
                  borderRadius="md"
                >
                  <Grid templateColumns="repeat(3, 1fr)" gap={9} p={8}>
                    <VStack align="start">
                      <Text fontWeight="bold">Popular Brands</Text>
                      <Link href="#">Amazon</Link>
                      <Link href="#">Ancestory</Link>
                      <Link href="#">Costco</Link>
                      <Link href="#">eBay</Link>
                      <Link href="#">Expedia</Link>
                      <Link href="#">Great Clips</Link>
                      <Link href="#">Kohl's</Link>
                      <Link href="#">Lowe's</Link>
                      <Link href="#">Nike</Link>
                      <Link href="#">Pizza Hut</Link>
                      <Link href="#">Target</Link>
                      <Link href="#">The Home Depot</Link>
                      <Link href="#">Turbo Tax</Link>
                      <Link href="#">Vista Print</Link>
                      <Link href="#">Walmart</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Trending</Text>
                      <Link href="#">Betterhelp</Link>
                      <Link href="#">Booking.com</Link>
                      <Link href="#">Budget</Link>
                      <Link href="#">Cabela'sDick's Sporting Goods</Link>
                      <Link href="#">HBO Max</Link>
                      <Link href="#">Macy's</Link>
                      <Link href="#">Old Navy</Link>
                      <Link href="#">Paramount+</Link>
                      <Link href="#">Pro FLowers</Link>
                      <Link href="#">Sam's Club</Link>
                      <Link href="#">Shutterfly</Link>
                      <Link href="#">Sunglass Hut</Link>
                      <Link href="#">TaxSlayer</Link>
                      <Link href="#">WayFair</Link>
                    </VStack>
                    <VStack align="start">
                      <Text fontWeight="bold">Coupon's Blog</Text>
                      <Link href="#">Sephora Sales Calendar 2024</Link>
                      <Link href="#">Ulta 2024 Sales Calendar</Link>
                      <Link href="#">Hobby Lobby 2024 Sales Calendar</Link>
                      <Link href="#">Nike Factory Outlet Stores</Link>
                      <Link href="#">Lowe's 2024 Sales Calendar</Link>
                      <Link href="#">Macy's 2024 Sales Calendar</Link>
                      <Link href="#">Home Depot 2024 Seasonal Sales Guide</Link>
                      <Link href="#">Cheapest Diaper Deals this Week</Link>
                      <Link href="#">Walmart Tires & Auto Center Guide</Link>
                      <Link href="#">Costco Airpods Deals</Link>
                      <Link href="#">Target 2024 Sales Calendar</Link>
                      <Link href="#">How Much Ancestry DNA Really Costs</Link>
                      <Link href="#">How to Try eharmony for Free</Link>
                      <Link href="#">Victoria's Secret Semi-Annual Sale</Link>
                      <Link href="#">2024 Ulta Birthday Gifts</Link>
                    </VStack>
                  </Grid>
                </MenuList>
              </MenuItem>

              <MenuDivider />
              <MenuItem>Deals of the Day</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex flex="2" justify="Center">
          <InputGroup>
            <InputLeftElement
              maxW="250px"
              maxH="200px"
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
              ml={170}
            />
            <Input
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Groupon ..."
              size="md"
              width="90%"
              p={4}
              borderRadius={30}
              border={"1px black"}
              my={-5}
              pl="200px"
            />
          </InputGroup>
          <Modal isOpen={isModalOpen} onClose={closeModal} size="lg" >
            <ModalOverlay />
            <ModalContent
              boxShadow="sm"
              bg="white"
              borderRadius="md"
              maxW="30%"
              maxH="50%"
              top="110px"
              ml={400}
            >
              <ModalHeader>Search Results</ModalHeader>
              <ModalCloseButton />
              <ModalBody maxHeight="60vh" overflowY="auto">
                {filteredDeals.map((deal, index) => (
                  <Box
                    key={index}
                    p={2}
                    boxShadow="sm"
                    borderRadius="md"
                    mb={1}
                    maxW="80vw"
                    maxH="80vh"
                    textAlign={"center"}
                    
                  >
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      height="180px"
                      width="180px"
                      objectFit="contain"
                      borderRadius="md"
                      mx="auto"
                      mb={2}
                    />
                    <Text fontSize="sm" fontWeight="bold" mt={2}>
                      {deal.title}
                    </Text>
                    <Text>Price{deal.price}</Text>
                  </Box>
                ))}
              </ModalBody>
              <ModalFooter justifyContent="center">
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Flex alignItems="center" flex="1" justify="flex-end">
          <Stack
            direction={"row"}
            spacing={7}
            alignItems="center"
            onClick={toggleQrCode}
          >
            {" "}
            <Box display={{ base: "none", md: "inline-flex" }}>
              <Text color={"white"} size={"sm"}>
                Get the Groupon App
                <Box>
                  {isQrCodeOpen && (
                    <Box
                      position="absolute"
                      top="120px"
                      left="70%"
                      transform="translateX(-50%)"
                      alignItems={"center"}
                      backgroundColor="white"
                      padding="30px"
                      borderRadius="10px"
                      boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                      display={isQrCodeOpen ? "block" : "none"}
                      onMouseEnter={() => setIsQrCodeOpen(true)}
                      onMouseLeave={() => setIsQrCodeOpen(false)}
                      w={240}
                    >
                      <Image
                        src="https://img.grouponcdn.com/sls/3pA72nHCtnUsjckH8KU4GvEKzzt/3p-83x82"
                        alt="QR Code"
                        width="100"
                        height="100"
                        mx="auto"
                      />
                      <Text fontSize="sm" color="gray.600">
                        scan to download the Groupon Mobile App on IOS and
                        Android
                      </Text>
                      <Divider borderColor="black" mt={2} />
                      <Button
                        bg={"blue"}
                        borderRadius={2}
                        color={"white"}
                        p={2}
                      >
                        Text me the Link Instead
                      </Button>
                    </Box>
                  )}
                </Box>
              </Text>
            </Box>
            <Box display={{ base: "none", md: "inline-flex" }}>
              <RouterLink
                to="/wishlist"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                My Wishlist
              </RouterLink>
            </Box>
            <Box ml="auto" display={{ base: "none", md: "inline-flex" }}>
              <RouterLink
                to="/sell"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Sell On Groupon
              </RouterLink>
            </Box>
            <RouterLink
              to="/help"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Help
            </RouterLink>
            <RouterLink
              to="/signin"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Sign In
            </RouterLink>
            <RouterLink
              to="/cart"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <IconButton
                as="span"
                aria-label="Cart"
                icon={<FaShoppingCart />}
                color="white"
                variant="ghost"
              />
            </RouterLink>
            <Badge
              position="relative"
              top="-1"
              right="-1"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              colorScheme="red"
              rounded="full"
            >
              7 {}
            </Badge>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
