import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Center,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <Box pos="absolute" bottom="0" right="50vh">
      <Text>© 2022 WiJob. All rights reserved.</Text>
    </Box>
  );
}
