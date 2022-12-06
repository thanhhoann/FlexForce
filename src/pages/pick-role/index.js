import React from 'react';
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
  Spinner,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LogoImg } from '../../assets/AssetUtil';
import { authActions } from '../../slices/authSlice';
import { SIGNUP } from '../../utils/route_name';

export default function PickRole() {
  const { toast } = createStandaloneToast();
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePickRole = role => {
    dispatch(authActions.updateUserType(role));
    setIsLoading(true);
    setTimeout(() => window.location.replace(SIGNUP), 2000);
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

          <Center>
            {isLoading ? (
              <Spinner />
            ) : (
              <Center
                flexDir="column"
                justifyContent="space-around"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                w="full"
                h="25rem"
                rounded="1rem"
              >
                <Image src={LogoImg} w="5rem" rounded="1rem" />
                <Flex justify="space-around" w="full">
                  <Center
                    rounded="1rem"
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                    _hover={{
                      boxShadow:
                        'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                    }}
                    w="10rem"
                    h="10rem"
                    cursor="pointer"
                    onClick={() => handlePickRole('CLIENT')}
                  >
                    <Text fontWeight="700" fontSize="1.2rem">
                      Join as&nbsp;
                    </Text>
                    <Text fontWeight="700" fontSize="1.2rem" color="orange.300">
                      Client
                    </Text>
                  </Center>

                  <Center
                    rounded="1rem"
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                    _hover={{
                      boxShadow:
                        'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                    }}
                    w="10rem"
                    h="10rem"
                    cursor="pointer"
                    onClick={() => handlePickRole('WORKER')}
                  >
                    <Text fontWeight="700" fontSize="1.2rem">
                      Join as&nbsp;
                    </Text>
                    <Text fontWeight="700" fontSize="1.2rem" color="gray.400">
                      Worker
                    </Text>
                  </Center>
                </Flex>
              </Center>
            )}
          </Center>
        </Stack>
      </Flex>
    </>
  );
}
