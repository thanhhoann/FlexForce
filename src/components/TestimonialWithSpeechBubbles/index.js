import { ReactNode } from "react";
import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        {
          /* <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text> */
        }
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Center h="100vh">
      <Container maxW={"7xl"} my="5rem" as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Access a vast pool of project opportunities from diverse
                industries and clients worldwide. Find projects that align with
                your skills and interests.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/dan-abramov"}
              name={"Dan Abarmov"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Deliver exceptional work, receive positive feedback from
                clients, and build a stellar reputation. Your reputation and
                ratings will open doors to more exciting projects and
                higher-paying opportunities.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/sage-adebayo"}
              name={"Sage Adebayo"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Prioritize the security and trust of our freelancers and
                clients. Our platform includes robust safety measures to protect
                your personal and financial information.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/kent-c-dodds"}
              name={"Kent Dodds"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Center>
  );
}
