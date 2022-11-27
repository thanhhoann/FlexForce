import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  StackProps,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiFillGithub } from 'react-icons/ai';

const UserCard = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.4)'
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Box pos="relative">
            <Avatar
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              name="Muhammad Ahmad"
              size="xl"
              borderRadius="md"
            />
          </Box>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          Muhammad Ahmad
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          Software Engineer, Creator of TemplatesKart
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          Sports lover ⚽️, exercise addict 🏋 and lifelong learner 👨🏻‍💻
        </Text>
      </Stack>
    </Container>
  );
};

export default UserCard;
