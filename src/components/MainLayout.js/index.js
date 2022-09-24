import { Box, useColorModeValue } from '@chakra-ui/react';
import NavBar from '../NavBar';

export default function MainLayout({ children }) {
  return (
    <>
      <Box bg={useColorModeValue('light.background', 'dark.background')}>
        <NavBar />
        {children}
      </Box>
    </>
  );
}
