// add display name field
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions, AuthStatus } from '../../slices/authSlice';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleIcon } from '../../assets/AssetUtil';
import GoogleAuth, { GoogleSignIn } from '../../utils/google_auth';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HOME, SIGNIN } from '../../utils/route_name';
import { Formik, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AUTH_REDIRECT_TIME } from '../../utils/times';
import { persistUser } from '../../utils/helpers/local-storage.helper';
import {
  Flex,
  Box,
  FormControl,
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
  InputRightElement,
  useMediaQuery,
  FormErrorMessage,
  VStack,
  createStandaloneToast,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignUp() {
  const { toast } = createStandaloneToast();
  const dispatch = useDispatch();
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

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
            <Heading fontSize="3xl">Sign up to WiJob</Heading>
          </Box>

          <Box
            p={8}
            rounded="1rem"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={
              isMobile
                ? ''
                : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
            }
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
                    <Text fontWeight="600">Sign up with Google</Text>
                  </Center>
                </Box>
              </Flex>

              <Flex align="center" gap="0.5rem">
                <Divider borderColor="black" />
                <Text>or</Text>
                <Divider borderColor="black" />
              </Flex>

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  termsOfService: false,
                }}
                onSubmit={({ email, password, termsOfService }) => {
                  createUserWithEmailAndPassword(auth, email, password)
                    .then(res => {
                      toast({
                        description: 'Account successfully created',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        variant: 'top-accent',
                      });

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
                      const message = err.message;

                      if (
                        message ===
                        'Firebase: Error (auth/email-already-in-use).'
                      )
                        toast({
                          variant: 'top-accent',
                          description: 'Email already in use',
                          status: 'error',
                          duration: 5000,
                          isClosable: true,
                        });
                    });
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
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

                      {/* terms of service */}
                      <FormControl
                        isInvalid={
                          errors.termsOfService && touched.termsOfService
                        }
                      >
                        <Field
                          as={Checkbox}
                          id="termsOfService"
                          name="termsOfService"
                          validate={value => {
                            let error;
                            if (value === false)
                              error = 'Please accept the terms';
                            return error;
                          }}
                        >
                          <Text textAlign="start" fontSize="0.8rem">
                            Yes, I understand and agree to the{' '}
                            <Link
                              color="blue"
                              _hover={{ textDecor: 'underline' }}
                              href="#"
                            >
                              WiJob Terms of Service
                            </Link>
                            , including the{' '}
                            <Link
                              color="blue"
                              _hover={{ textDecor: 'underline' }}
                              href="#"
                            >
                              User Agreement
                            </Link>{' '}
                            and{' '}
                            <Link
                              color="blue"
                              _hover={{ textDecor: 'underline' }}
                              href="#"
                            >
                              Privacy Policy
                            </Link>
                            .
                          </Text>
                        </Field>
                        <FormErrorMessage>
                          {errors.termsOfService}
                        </FormErrorMessage>
                      </FormControl>

                      {/*  register button */}
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ backgroundColor: 'gray.700' }}
                        type="submit"
                      >
                        <Text>Create my account</Text>
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Stack>

            {/* sign in button */}
            <Flex align="center" mt="2rem" mb="1rem">
              <Divider borderColor="black" />
              <Text minW="14rem" textAlign="center">
                Already have an WiJob account ?
              </Text>
              <Divider borderColor="black" />
            </Flex>

            <Link href={SIGNIN} textDecor="none" _hover={{ textDecor: 'none' }}>
              <Button
                _hover={{ backgroundColor: 'gray.100' }}
                bg="white"
                borderWidth="1px"
                borderColor="black"
              >
                <Text>Sign in</Text>
              </Button>
            </Link>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
