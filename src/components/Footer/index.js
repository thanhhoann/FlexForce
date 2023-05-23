import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box pos="fixed" left="0" bottom="0" w="full">
      <Text>© 2022 WiJob. All rights reserved.</Text>
    </Box>
  );
}
