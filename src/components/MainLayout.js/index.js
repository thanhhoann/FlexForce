import { Box, useColorModeValue } from '@chakra-ui/react';
import ParallaxContainer from '../../utils/Parallax/ParallaxContainer';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function MainLayout({ children }) {
  return (
    <>
      {/* <ParallaxContainer>  */}
      <NavBar />
      {children}
      {/* <Footer /> */}
      {/* </ParallaxContainer> */}
    </>
  );
}
