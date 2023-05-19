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
            <NavBar />
            {children}
            {/* <Footer /> */}
            {/* </ParallaxContainer> */}
            <Box
              position="relative"
              bottom={0}
              p={2}
              textAlign="center"
              fontWeight="900"
            >
              Made by&nbsp;
              <Link href="https://www.instagram.com/hoanthanh_/" isExternal>
                @hoanthanh_
              </Link>
            </Box>
          </>
        )}
    </>
  );
}
