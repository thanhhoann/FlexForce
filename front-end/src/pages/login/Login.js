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
} from '@chakra-ui/react';
import { GoogleIcon } from '../../assets/AssetUtil';
import GoogleAuth from '../../utils/google_auth';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Login() {
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
      <Flex minH="100vh" align="center" justify="center" mx="1rem">
        <Stack
          spacing={8}
          mx="1rem"
          w="50vw"
          minW="20rem"
          maxW="40rem"
          py={12}
          px={6}
        >
          <Stack align={'center'}>
            <Heading fontSize="3xl">Sign in to WiJob</Heading>
          </Stack>
          <Box
            rounded="1rem"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
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
                {/* email login button */}
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

              {/* google login button */}
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
              <Text minW="14rem">Don't have an WiJob account ?</Text>
              <Divider borderColor="black" />
            </Flex>

            {/* sign up button */}
            <Button
              _hover={{ backgroundColor: 'gray.100' }}
              bg="white"
              borderWidth="1px"
              borderColor="black"
            >
              <Text>Sign Up</Text>
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Center w="100vw" pos="absolute" bottom="1rem">
        <Text fontWeight={800}>© 2022 WiJob</Text>
      </Center>
    </>
  );
}
