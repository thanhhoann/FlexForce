import {
  Avatar,
  Box,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Highlight,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  CONTACT,
  FIND_WORKERS,
  HOME,
  INTRO,
  SIGNIN,
  SIGNUP,
  TAKE_JOBS,
  USER_PROFILE,
} from "../../utils/route_name";
import { ColorModeSwitcher } from "../../utils/helpers/color-mode.helper";
import { HiOutlineUser } from "react-icons/hi";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import { LogoImg } from "../../assets/AssetUtil";
import { leadingColor, royalPurple } from "../../utils/colors";

export default function NavBar() {
  const [isLaptop] = useMediaQuery("(min-width: 1024px)");
  const role = localStorage.getItem("role");

  const light_dark = useColorModeValue("light.primary", "dark.primary");
  const dark_light = useColorModeValue("dark.primary", "light.primary");

  const { isOpen, onClose, onToggle } = useDisclosure();

  const handleSignOut = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("persist:root");
    window.location.reload();
    window.location.replace(SIGNIN);
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      boxShadow="md"
      bg="white"
    >
      <Flex
        bg="white"
        color={useColorModeValue("gray.600", "white")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex align="center" justify="space-between" w="full">
          <Link href={HOME}>
            <Heading
              color="black"
              fontWeight={1000}
              _hover={{ fontStyle: "italic" }}
            >
              <Highlight
                query="Force"
                styles={{
                  borderRadius: "1rem",
                  color: leadingColor,
                }}
              >
                FlexForce
              </Highlight>
            </Heading>
          </Link>

          {isLaptop && (
            <Flex>
              <DesktopNav />
            </Flex>
          )}

          <Flex gap={2} align="center">
            {/* <ColorModeSwitcher w="1rem" h="1rem" rounded={4} mr="1rem" /> */}
            {isLaptop &&
              (persistUser
                ? (
                  <Center
                    color={light_dark}
                    rounded="0.3rem"
                    px="0.5rem"
                    py="0.2rem"
                    h="full"
                    w="full"
                    gap="1rem"
                  >
                    <Flex gap="0.5rem" justifyContent="center" align="center">
                      <Flex alignItems={"center"}>
                        <Menu>
                          <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                          >
                            <Avatar
                              size={"md"}
                              src={`https://api.dicebear.com/6.x/notionists/svg?seed=${persistUser.email}`}
                            />
                          </MenuButton>
                          <MenuList zIndex={2}>
                            <MenuGroup
                              color="black"
                              title={persistUser.email}
                            >
                              {
                                /* <Text
                              color="black"
                              fontWeight={700}
                              p="1"
                              minW="10rem"
                              _hover={{ fontWeight: '900' }}
                              cursor="pointer"
                            >
                              {persistUser.email}
                            </Text> */
                              }
                              <MenuDivider />
                              <MenuItem
                                color="black"
                                fontWeight={600}
                                _hover={{ fontWeight: "800" }}
                              >
                                <Link href="user-profile">
                                  User Profile
                                </Link>
                              </MenuItem>
                              <MenuItem
                                color="black"
                                fontWeight={600}
                                _hover={{ fontWeight: "800" }}
                              >
                                <Link href="job-log">
                                  Job Log
                                </Link>
                              </MenuItem>
                              <MenuItem _hover={{ bg: "none" }}>
                                <Button
                                  rounded="0.5rem"
                                  bg={dark_light}
                                  p="2"
                                  onClick={handleSignOut}
                                  _hover={{ bg: "gray.500" }}
                                  fontWeight="800"
                                >
                                  SIGN OUT
                                </Button>
                              </MenuItem>
                            </MenuGroup>
                          </MenuList>
                        </Menu>
                      </Flex>
                    </Flex>
                  </Center>
                )
                : (
                  <>
                    <Link href={SIGNIN}>
                      <Button
                        fontSize={"sm"}
                        fontWeight={600}
                        borderWidth={2}
                        borderColor={dark_light}
                        color={dark_light}
                        rounded="0.5rem"
                        bgColor={light_dark}
                      >
                        <Flex align="center" pl={2}>
                          <Text>Sign in</Text>
                          <ChevronRightIcon fontSize="1.2rem" />
                        </Flex>
                      </Button>
                    </Link>

                    <Link href={SIGNUP}>
                      <Button
                        fontSize={"sm"}
                        fontWeight={600}
                        color={light_dark}
                        bgColor={dark_light}
                        rounded="0.5rem"
                      >
                        <Flex align="center" pl={2}>
                          <Text>Sign Up</Text>
                          <ChevronRightIcon fontSize="1.2rem" />
                        </Flex>
                      </Button>
                    </Link>
                  </>
                ))}
          </Flex>
        </Flex>

        {!isLaptop && (
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ sm: "flex", md: "flex", lg: "none" }}
          >
            <IconButton
              onClick={onToggle}
              w="fit-content"
              rounded="0.2rem"
              _active={{ bg: "none" }}
              icon={<HamburgerIcon w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        )}
      </Flex>

      {!isLaptop && (
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Center
                flexDir="column"
                h="full"
              >
                <Center flexDir="column" fontSize="6rem" mt="8rem">
                  <Link href={INTRO} _hover={{ fontWeight: "800" }}>INTRO</Link>
                  <Link href={CONTACT} _hover={{ fontWeight: "800" }}>
                    CONTACT
                  </Link>
                </Center>

                {persistUser
                  ? (
                    <Center
                      color={light_dark}
                      rounded="0.3rem"
                      px="0.5rem"
                      py="0.2rem"
                      h="full"
                      w="20vw"
                      gap="1rem"
                    >
                      <Button
                        rounded="0.5rem"
                        bg={dark_light}
                        p="2"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </Button>
                    </Center>
                  )
                  : (
                    <>
                      <Link href={SIGNIN}>
                        <Button
                          fontSize={"sm"}
                          fontWeight={600}
                          borderWidth={2}
                          borderColor={dark_light}
                          color={dark_light}
                          rounded="0.5rem"
                          bgColor={light_dark}
                        >
                          <Flex align="center" pl={2}>
                            <Text>Sign in</Text>
                            <ChevronRightIcon fontSize="1.2rem" />
                          </Flex>
                        </Button>
                      </Link>

                      <Link href={SIGNUP}>
                        <Button
                          fontSize={"sm"}
                          fontWeight={600}
                          color={light_dark}
                          bgColor={dark_light}
                          rounded="0.5rem"
                        >
                          <Flex align="center" pl={2}>
                            <Text>Sign Up</Text>
                            <ChevronRightIcon fontSize="1.2rem" />
                          </Flex>
                        </Button>
                      </Link>
                    </>
                  )}
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
}

const DesktopNav = () => {
  const prefixLinkColor = useColorModeValue("gray.400", "gray.100");
  const linkColor = "black";
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Stack direction={"row"} spacing={"3rem"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  <Flex
                    align="center"
                    gap=".3rem"
                    _hover={{ fontWeight: "1000" }}
                  >
                    <Text
                      fontSize={"1.3rem"}
                      color={prefixLinkColor}
                      fontWeight={1000}
                    >
                      /
                    </Text>
                    <Text fontSize={"1.1rem"} fontFamily>{navItem.label}</Text>
                    <Text
                      fontSize={"1.3rem"}
                      color={prefixLinkColor}
                      fontWeight={1000}
                    >
                      /
                    </Text>
                  </Flex>
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "INTRO",
    href: INTRO,
  },
  {
    label: "CONTACT",
    href: CONTACT,
  },
];
