import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  IconProps,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { ArrowDownGif, ScrollDownGif } from "../../assets/AssetUtil";
import { leadingColor } from "../../utils/colors";
import { FIND_WORKERS, TAKE_JOBS } from "../../utils/route_name";
import TestimonialWithSpeechBubbles from "../TestimonialWithSpeechBubbles";
import HeroSectionButton from "./HeroSectionButton";

export default function HeroSection({ role }) {
  return (
    <>
      <Center h="100vh">
        <Stack
          textAlign={"center"}
          align={"center"}
          py={{ base: 20, md: 28 }}
          gap="2rem"
        >
          <Flex>
            <Heading
              fontWeight={900}
              fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "8xl" }}
            >
              Speedy Job&nbsp;
            </Heading>
            <Heading
              fontWeight={900}
              fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "8xl" }}
              color={leadingColor}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Steady Income
              </motion.div>
            </Heading>
          </Flex>

          <Text
            color={"gray.500"}
            fontWeight={400}
            fontSize={{ base: "1xl", sm: "1xl", md: "3xl", lg: "3xl" }}
          >
            The World Most Trusted Freelance Website
          </Text>

          <Stack spacing={3} direction={"row"}>
            {localStorage.getItem("role") === "CLIENT"
              ? (
                <Link href={FIND_WORKERS}>
                  <HeroSectionButton text={"FIND WORKERS"} />
                </Link>
              )
              : (
                <Link href={TAKE_JOBS}>
                  <HeroSectionButton text={"TAKE JOBS"} />
                </Link>
              )}
          </Stack>
        </Stack>
      </Center>

      {
        /* <Center>
        <Image w="5rem" src={ArrowDownGif} />
      </Center> */
      }
    </>
  );
}
