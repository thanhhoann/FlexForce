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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { HOME, SIGNIN, SIGNUP } from '../../utils/route_name';
import { ColorModeSwitcher } from '../../utils/helpers/color-mode.helper';
import { persistUser } from '../../utils/helpers/local-storage.helper';
import { LogoImg } from '../../assets/AssetUtil';

export default function NavBar() {
  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

  const light_dark = useColorModeValue('light.primary', 'dark.primary');
  const dark_light = useColorModeValue('dark.primary', 'light.primary');

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
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
            <ColorModeSwitcher w="1rem" h="1rem" rounded={4} mr="1rem" />
            {isLaptop &&
              (persistUser ? (
                <Center
                  bg={dark_light}
                  color={light_dark}
                  rounded="0.3rem"
                  px="0.5rem"
                  py="0.2rem"
                  h="full"
                  w="full"
                >
                  <Text fontWeight={700}>{persistUser.email}</Text>
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

                  <Link href={SIGNIN}>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit
                dolor magna eget est lorem. Erat imperdiet sed euismod nisi
                porta. Lectus vestibulum mattis ullamcorper velit.
              </p>
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
    label: 'About',
    children: [
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    children: [
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
    ],
  },
  {
    label: 'Client as a Service',
    children: [
      {
        label: 'children_label 1',
        subLabel: 'children_sub-label 1',
        href: '#',
      },
      {
        label: 'children_label 1',
        subLabel: 'children_sub-label 1',
        href: '#',
      },
    ],
  },
  {
    label: 'Work as a Service',
    children: [
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
      {
        label: 'children_label 2',
        subLabel: 'children_sub-label 2',
        href: '#',
      },
    ],
  },
];
