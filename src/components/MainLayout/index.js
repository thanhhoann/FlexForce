import {
  Box,
  Center,
  Link,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { purple_1 } from "../../utils/colors";
import ParallaxContainer from "../../utils/Parallax/ParallaxContainer";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default function MainLayout({ children }) {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isSmallerThan768
        ? (
          <Center
            isCentered
            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
            backdropFilter=" blur( 4px )"
            rounded="10px"
            border="1px solid rgba( 255, 255, 255, 0.18 )"
            w="100vw"
            h="100vh"
          >
            <Text w="15rem" h="8rem">
              Please view the website on desktop. Thanks bro :)))))
            </Text>
          </Center>
        )
        : (
          <>
            {/* <ParallaxContainer>  */}
            <Box>
              <NavBar />
              {children}
              {/* <Footer /> */}
              {/* </ParallaxContainer> */}
              <Center
                position="fixed"
                left={0}
                bottom={0}
                p={2}
                w="full"
                textAlign="center"
                fontWeight="900"
              >
                <Box
                  bgColor="black"
                  py="1"
                  px="3"
                  rounded="0.5rem"
                  color="white"
                >
                  <Text>© 2022-2023 FlexForce. All rights reserved.</Text>
                </Box>
              </Center>
            </Box>
          </>
        )}
    </>
  );
}
