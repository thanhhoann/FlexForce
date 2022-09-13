import { Box } from '@chakra-ui/react';
import NavBar from '../NavBar';

export default function MainLayout({ children }) {
  return (
    <>
      <Box>
        <NavBar />
        {children}
      </Box>
    </>
  );
}
