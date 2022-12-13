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
  Link,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowDownGif } from '../../assets/AssetUtil';
import { FIND_WORKERS, TAKE_JOBS } from '../../utils/route_name';
import Testimonial from '../Testimonial';

export default function HeroSection() {
  return (
    <>
      <Center h="100vh" px="1rem">
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

          <Stack spacing={3} direction={'row'}>
            <Link href={FIND_WORKERS}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
              >
                FIND WORKERS
              </Button>
            </Link>

            <Link href={TAKE_JOBS}>
              <Button rounded={'full'} px={6}>
                TAKE JOBS
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Center>

      {/* <Center>
        <Image w="5rem" src={ArrowDownGif} />
      </Center> */}
    </>
  );
}
