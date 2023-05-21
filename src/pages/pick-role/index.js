import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  createStandaloneToast,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { LogoImg } from "../../assets/AssetUtil";
import { authActions, AuthStatus } from "../../slices/authSlice";
import { HOME, SIGNUP } from "../../utils/route_name";
import { persistAuthStatus } from "../../utils/helpers/local-storage.helper";
import { leadingColor } from "../../utils/colors";

export default function PickRole() {
  const { toast } = createStandaloneToast();
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [roleInternalUse, setRoleInternalUse] = useState("");

  const handlePickRole = (role) => {
    setRoleInternalUse(role);
    dispatch(authActions.updateUserType(role));
    localStorage.setItem("role", role);
    setIsLoading(true);
    setTimeout(() => window.location.replace(HOME), 2000);
  };

  useEffect(() => {
    if (persistAuthStatus === AuthStatus.UNAUTHORIZED) {
      window.location.replace("signin");
    }
  }, []);

  return (
    <>
      <Flex align="center" justify="center" mx="1rem" h="90vh">
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
          <Center>
            {isLoading ? <Spinner /> : (
              <Center
                flexDir="column"
                justifyContent="space-around"
                w="full"
                h="25rem"
                rounded="1rem"
              >
                <Flex flexDir="column" justify="space-around" w="full">
                  <Center mb="5rem">
                    <Heading>Choose as</Heading>
                  </Center>

                  <Center gap="5rem">
                    <Center
                      rounded="1rem"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      _hover={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      }}
                      w="10rem"
                      h="10rem"
                      cursor="pointer"
                      onClick={() => handlePickRole("CLIENT")}
                    >
                      <Text
                        fontWeight="900"
                        fontSize="1.2rem"
                        color={leadingColor}
                      >
                        CLIENT
                      </Text>
                    </Center>

                    <Center
                      rounded="1rem"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      _hover={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      }}
                      w="10rem"
                      h="10rem"
                      cursor="pointer"
                      onClick={() => handlePickRole("WORKER")}
                    >
                      <Text fontWeight="700" fontSize="1.2rem">
                        WORKER
                      </Text>
                    </Center>
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
