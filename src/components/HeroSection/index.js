import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Center,
  SimpleGrid,
  Grid,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export default function HeroSection() {
  const section2_1 = useRef(null);
  const section2_2 = useRef(null);
  const section2_3 = useRef(null);

  const isInViewRef = useRef(null);
  const isInView = useInView(isInViewRef, { once: true });

  return (
    <>
      <Flex flexDir="column" align="center" justify="center">
        {/* section 1 */}
        <Box h="102vh">
          <Flex mt="2rem" mx="auto" h="80%" w="80%" gap="2rem">
            <Box
              bg="dark.primary"
              h="full"
              w="full"
              color="white"
              rounded="0.5rem"
              p="1rem"
            >
              <Box
                color="light.header_blue"
                p={9}
                fontWeight="black"
                fontSize="-moz-initial"
                w="full"
                
              >
                FOR RECRUITERS & ENTREPRENEURS
              </Box>
              <Box p={5} fontWeight="black" fontSize="large">
                GET ACCESS TO 100.000+ <br></br> JOBS AVAILABLE
              </Box>
              <Box p={5}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus iusto laudantium tempora perferendis, consectetur
                  aliquam quasi accusantium facilis velit expedita! Recusandae
                  eos, quo nemo ipsa quidem non unde exercitationem error!
                </Text>
              </Box>
              <Button bgColor="light.header_orange" color="light.primary">
                GET JOBS
              </Button>
            </Box>

            <Box
              bg="dark.primary"
              h="full"
              w="full"
              color="white"
              rounded="0.5rem"
              p="1rem"
            >
              <Box
                color="light.header_blue"
                p={9}
                fontWeight="black"
                fontSize="-moz-initial"
              >
                FOR EMPLOYERS
              </Box>
              <Box p={5} fontWeight="black" fontSize="large">
                GET ACCESS TO 100.000+ <br></br> JOBS AVAILABLE
              </Box>
              <Box p={5}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus iusto laudantium tempora perferendis, consectetur
                  aliquam quasi accusantium facilis velit expedita! Recusandae
                  eos, quo nemo ipsa quidem non unde exercitationem error!
                </Text>
              </Box>
              <Button bgColor="light.header_orange" color="light.primary">
                GET JOBS
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* section 2 */}
        <Flex flexDir="column" align="center" w="100vw" h="100vh" px="1rem">
          <Flex flexDir="column" align="center" justify="center" my="5rem">
            <Heading
              color="#F8503C"
              ref={isInViewRef}
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              WHAT DO CLIENTS SAY AND USERS SAY
            </Heading>
            <Text
              fontSize="1.5rem"
              fontWeight="700"
              ref={isInViewRef}
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              DO IT FOR ME, QUICK JOB QUICK MONEY
            </Text>
          </Flex>

          <Grid
            flexDir="row"
            align="center"
            gap="1rem"
            templateRows="repeat(1, 1fr)"
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
          >
            <Box
              boxShadow="2xl"
              rounded="0.5rem"
              py="2rem"
              px="1.2rem"
              bg="gray.800"
              color="white"
              ref={isInViewRef}
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <Heading fontSize="1rem" mb="1rem">
                Ruben is op z’n plekkie bij T-Mobile.
              </Heading>
              <Text fontSize="0.8rem" color="gray.200" fontWeight="600">
                “Ik mocht eerst een opleiding volgen tot JavaScript Vue-expert
                en kon daarna meteen voor T-Mobile aan de slag.”
              </Text>
            </Box>

            <Box
              boxShadow="2xl"
              rounded="0.5rem"
              p="1rem"
              bg="white"
              h="full"
              ref={isInViewRef}
              style={{
                transform: isInView ? 'none' : 'translateY(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <Heading fontSize="1.3rem">
                Ruben is op z’n plekkie bij T-Mobile.
              </Heading>
              <Text>
                “Ik mocht eerst een opleiding volgen tot JavaScript Vue-expert
                en kon daarna meteen voor T-Mobile aan de slag.”
              </Text>
            </Box>

            <Box
              // as={motion.div}
              boxShadow="2xl"
              rounded="0.5rem"
              py="2rem"
              px="1.2rem"
              bg="gray.800"
              color="white"
              ref={isInViewRef}
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <Heading fontSize="1rem" mb="1rem">
                Ruben is op z’n plekkie bij T-Mobile.
              </Heading>
              <Text fontSize="0.8rem" color="gray.200" fontWeight="600">
                “Ik mocht eerst een opleiding volgen tot JavaScript Vue-expert
                en kon daarna meteen voor T-Mobile aan de slag.”
              </Text>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
