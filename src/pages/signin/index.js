import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center,
  Divider,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from '@chakra-ui/react';
import { GoogleIcon } from '../../assets/AssetUtil';
import GoogleAuth from '../../utils/google_auth';
import { BsFillPersonFill } from 'react-icons/bs';
import { SIGNUP } from '../../utils/route_name';

export default function SignIn() {
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  const handleGoogleSignIn = async () => {
    try {
      await GoogleAuth.signIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await GoogleAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex align="center" justify="center" mx="1rem">
        <Stack
          spacing={8}
          mx="1rem"
          py={12}
          px={6}
          w="70vw"
          minW="24rem"
          maxW="30rem"
        >
          <Box align="center">
            <Heading fontSize="3xl">Sign in to WiJob</Heading>
          </Box>

          <Box
            rounded="1rem"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={
              isMobile
                ? ''
                : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
            }
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <InputGroup>
                  <Input type="text" placeholder="Username or Email" />
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsFillPersonFill />}
                  />
                </InputGroup>
              </FormControl>

              <Stack spacing={10}>
                {/* email SignIn button */}
                <Button
                  bg="black"
                  color="white"
                  _hover={{ backgroundColor: 'gray.700' }}
                >
                  <Text>Continue with Email</Text>
                </Button>
              </Stack>

              <Flex align="center" gap="0.5rem">
                <Divider borderColor="black" />
                <Text>or</Text>
                <Divider borderColor="black" />
              </Flex>

              {/* google SignIn button */}
              <Flex
                bg="light.googleBtn"
                color="white"
                p="1px"
                rounded="full"
                cursor="pointer"
                onClick={handleGoogleSignIn}
              >
                <Box bg="white" rounded="full" minW="38px" minH="38px">
                  <Center w="full" h="full">
                    <Image w="20px" h="20px" src={GoogleIcon} />
                  </Center>
                </Box>
                <Box w="full">
                  <Center w="full" h="full">
                    <Text fontWeight="600">Sign in with Google</Text>
                  </Center>
                </Box>
              </Flex>
            </Stack>

            <Flex align="center" mt="5rem" mb="1rem">
              <Divider borderColor="black" />
              <Text minW="14rem" textAlign="center">
                Don't have an WiJob account ?
              </Text>
              <Divider borderColor="black" />
            </Flex>

            {/* sign up button */}
            <Link href={SIGNUP} textDecor="none" _hover={{ textDecor: 'none' }}>
              <Button
                _hover={{ backgroundColor: 'gray.100' }}
                bg="white"
                borderWidth="1px"
                borderColor="black"
              >
                <Text>Sign Up</Text>
              </Button>
            </Link>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
