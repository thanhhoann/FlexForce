import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  useMediaQuery,
  Center,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FIND_WORKERS, HOME, SIGNIN, SIGNUP } from '../../utils/route_name';
import { ColorModeSwitcher } from '../../utils/helpers/color-mode.helper';
import { HiOutlineUser } from 'react-icons/hi';
import { persistUser } from '../../utils/helpers/local-storage.helper';
import { LogoImg } from '../../assets/AssetUtil';

export default function NavBar() {
  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

  const light_dark = useColorModeValue('light.primary', 'dark.primary');
  const dark_light = useColorModeValue('dark.primary', 'light.primary');

  const { isOpen, onClose, onToggle } = useDisclosure();

  const handleSignOut = () => {
    localStorage.removeItem('persist:root');
    window.location.reload();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('light.background', 'dark.background')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex align="center" justify="space-between" w="full">
          <Link href={HOME}>
            <Heading>
              <Image src={LogoImg} />
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
              (persistUser ? (
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
                    <Flex alignItems={'center'}>
                      <Menu>
                        <MenuButton
                          as={Button}
                          rounded={'full'}
                          variant={'link'}
                          cursor={'pointer'}
                          minW={0}
                        >
                          <Avatar size={'sm'} />
                        </MenuButton>
                        <MenuList>
                          <MenuGroup color="black" title={persistUser.email}>
                            {/* <Text
                              color="black"
                              fontWeight={700}
                              p="1"
                              minW="10rem"
                              _hover={{ fontWeight: '900' }}
                              cursor="pointer"
                            >
                              {persistUser.email}
                            </Text> */}
                            <MenuItem color="black">User profile</MenuItem>
                            <MenuDivider />
                            <MenuItem _hover={{ bg: 'none' }}>
                              <Button
                                rounded="0.5rem"
                                bg={dark_light}
                                p="2"
                                onClick={handleSignOut}
                                _hover={{ bg: 'gray.500' }}
                              >
                                Sign out
                              </Button>
                            </MenuItem>
                          </MenuGroup>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </Flex>
                </Center>
              ) : (
                <>
                  <Link href={SIGNIN}>
                    <Button
                      fontSize={'sm'}
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
                      fontSize={'sm'}
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
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ sm: 'flex', md: 'flex', lg: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              w="fit-content"
              rounded="0.2rem"
              _active={{ bg: 'none' }}
              icon={<HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
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
                fontWeight={700}
                fontSize="2.5rem"
              >
                <Link href="#">Why WiJob</Link>
                <Link href={FIND_WORKERS}>Find workers</Link>
                <Link href="#">Contact</Link>

                <Divider />

                {persistUser ? (
                  <Center
                    color={light_dark}
                    rounded="0.3rem"
                    px="0.5rem"
                    py="0.2rem"
                    h="full"
                    w="full"
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
                ) : (
                  <>
                    <Link href={SIGNIN}>
                      <Button
                        fontSize={'sm'}
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
                        fontSize={'sm'}
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
  const prefixLinkColor = useColorModeValue('gray.400', 'gray.100');
  const linkColor = useColorModeValue('gray.800', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map(navItem => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  <Flex align="center" gap="0.5rem">
                    <Text color={prefixLinkColor} fontWeight={1000}>
                      /
                    </Text>
                    <Text>{navItem.label}</Text>
                  </Flex>
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => (
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
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'gray.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: 'Why WiJob',
    // children: [
    //   {
    //     label: 'children_label 2',
    //     subLabel: 'children_sub-label 2',
    //     href: '#',
    //   },
    //   {
    //     label: 'children_label 2',
    //     subLabel: 'children_sub-label 2',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Find workers',
    href: 'find-workers',
    // children: [
    //   {
    //     label: 'children_label 2',
    //     subLabel: 'children_sub-label 2',
    //     href: '#',
    //   },
    //   {
    //     label: 'children_label 2',
    //     subLabel: 'children_sub-label 2',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Contact',
    // children: [
    //   {
    //     label: 'children_label 1',
    //     subLabel: 'children_sub-label 1',
    //     href: '#',
    //   },
    //   {
    //     label: 'children_label 1',
    //     subLabel: 'children_sub-label 1',
    //     href: '#',
    //   },
    // ],
  },
];
