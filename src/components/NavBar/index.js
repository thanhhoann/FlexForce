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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { HOME, SIGNIN, SIGNUP } from '../../utils/route_name';
import { ColorModeSwitcher } from '../../utils/helpers/color-mode.helper';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

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
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            w="fit-content"
            rounded="0.2rem"
            _active={{ bg: 'none' }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex align="center" justify="space-between" w="full">
          <Link href={HOME}>
            <Heading
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('gray.800', 'white')}
              fontSize="lg"
            >
              Logo
            </Heading>
          </Link>

          <Flex>
            <DesktopNav />
          </Flex>

          <Flex gap={2}>
            <ColorModeSwitcher w="1rem" h="1rem" />
            <Link href={SIGNIN}>
              <Button
                fontSize={'sm'}
                fontWeight={600}
                borderWidth={2}
                borderColor={useColorModeValue('black', 'white')}
                color={useColorModeValue('black', 'white')}
                rounded="0.5rem"
                bgColor={useColorModeValue('light.primary', 'dark.primary')}
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
                color={useColorModeValue('white', 'black')}
                bgColor={useColorModeValue('black', 'light.primary')}
                rounded="0.5rem"
              >
                <Flex align="center" pl={2}>
                  <Text>Sign Up</Text>
                  <ChevronRightIcon fontSize="1.2rem" />
                </Flex>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
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

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
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
