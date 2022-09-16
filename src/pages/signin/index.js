import React, { useState } from 'react';
import { GoogleIcon } from '../../assets/AssetUtil';
import { BsFillPersonFill } from 'react-icons/bs';
import { SIGNUP, HOME } from '../../utils/route_name';
import { useDispatch } from 'react-redux';
import {
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { authActions } from '../../slices/authSlice';
import { auth } from '../../firebase';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Formik, Form, Field } from 'formik';
import { AuthStatus } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
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
  InputRightElement,
  useMediaQuery,
  createStandaloneToast,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AUTH_REDIRECT_TIME } from '../../utils/times';
import { persistUser } from '../../utils/helpers/local-storage.helper';
import { GoogleAuthProvider } from 'firebase/auth';

export default function SignIn() {
  const navigate = useNavigate();
  const { toast } = createStandaloneToast();
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  const dispatch = useDispatch();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleGoogleSignIn = async () => {
    try {
      //     signInWithRedirect(auth, provider);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then(res =>
        dispatch(
          authActions.setUser({
            email: res.user.email,
            uid: res.user.uid,
            displayName: res.user.displayName,
            // photoURL: res.user.photoURL,
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    // try {
    //   await GoogleAuth.signOut();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Flex align="center" justify="center" mx="1rem">
        {/* {isRedirecting && <p>IS REDIRECTING TO HOME PAGE ...</p>} */}
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

              <Flex align="center" gap="0.5rem">
                <Divider borderColor="black" />
                <Text>or</Text>
                <Divider borderColor="black" />
              </Flex>

              {/* email and password  */}
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  rememberMe: false,
                }}
                onSubmit={({ email, password, rememberMe }) => {
                  signInWithEmailAndPassword(auth, email, password)
                    .then(res => {
                      console.log(res);
                      // update auth status
                      dispatch(
                        authActions.updateAuthStatus(AuthStatus.AUTHORIZED)
                      );

                      // update user info
                      dispatch(
                        authActions.setUser({
                          uid: res.user.uid,
                          email: res.user.email,
                        })
                      );
                      setIsRedirecting(true);
                      if (persistUser) {
                        navigate(HOME, { replace: true });
                      }
                    })
                    .catch(err => {
                      console.log(err);
                      let message = 'User not found';
                      if (err.code === 'auth/invalid-email')
                        message = 'Invalid email';
                      if (err.code === 'auth/wrong-password')
                        message = 'Wrong password';
                      if (err)
                        toast({
                          variant: 'top-accent',
                          description: message,
                          status: 'error',
                          duration: 5000,
                          isClosable: true,
                        });
                    });
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <Form>
                    <VStack spacing={4} align="flex-start">
                      {/* email */}
                      <FormControl isInvalid={errors.email && touched.email}>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          validate={value => {
                            let error;
                            if (value.length === 0)
                              error = 'Please enter your email';
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>

                      {/* password */}
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <InputGroup size="md">
                          <Field
                            as={Input}
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            validate={value => {
                              let error;
                              if (value.length < 5) {
                                error =
                                  'Password must contain at least 6 characters';
                              }
                              return error;
                            }}
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              bg="white"
                              _hover={{ bg: 'white' }}
                              _active={{ bg: 'white' }}
                              onClick={handleShowPassword}
                            >
                              {showPassword ? (
                                <AiOutlineEye />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>

                      {/* remember me */}
                      <FormControl
                        isInvalid={
                          errors.termsOfService && touched.termsOfService
                        }
                      >
                        <Field as={Checkbox} id="rememberMe" name="rememberMe">
                          <Text textAlign="start" fontSize="0.8rem">
                            I'm horny
                          </Text>
                        </Field>
                      </FormControl>

                      {/*  sign in button */}
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ backgroundColor: 'gray.700' }}
                        type="submit"
                      >
                        <Text>Sign in</Text>
                      </Button>
                    </VStack>
                  </Form>
                )}
              </Formik>
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
