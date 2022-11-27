import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Center,
  SimpleGrid,
  Grid,
  Container,
  Stack,
  Icon,
  IconProps,
  Image,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowDownGif } from '../../assets/AssetUtil';
import Testimonial from '../Testimonial';

export default function HeroSection() {
  return (
    <>
      <Center h="75vh">
        <Stack
          textAlign={'center'}
          align={'center'}
          py={{ base: 20, md: 28 }}
          gap="2rem"
        >
          <Flex>
            <Heading
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '4xl', md: '6xl', lg: '8xl' }}
            >
              Quick Job&nbsp;
            </Heading>
            <Heading
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '4xl', md: '6xl', lg: '8xl' }}
              color="orange"
            >
              Quick Money
            </Heading>
          </Flex>

          <Text
            color={'gray.500'}
            fontWeight={400}
            fontSize={{ base: '1xl', sm: '1xl', md: '3xl', lg: '3xl' }}
          >
            The World Most Trusted Freelance Website
          </Text>

          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
            >
              GET WORKERS
            </Button>
            <Button rounded={'full'} px={6}>
              GET JOBS
            </Button>
          </Stack>
        </Stack>
      </Center>

      <Center>
        <Image w="5rem" src={ArrowDownGif} />
      </Center>
    </>
  );
}
