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
  Badge,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
// Here we have used react-icons package for the icons
import { AiFillGithub } from 'react-icons/ai';
import sample_users from '../../utils/sample_users.json';

const UserCard = () => {
  const [profile, setProfle] = React.useState();

  React.useEffect(() => {
    setProfle(sample_users[Math.floor(Math.random() * 100)]);
  }, []);
  console.log(profile);

  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="23rem"
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
          {profile && profile.user_name}
          <Badge fontSize="0.8rem" fontWeight="bold" ml="0.5rem">
            ID : {profile && profile.user_id}
          </Badge>
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          {profile && profile.home_address}
        </Text>
        <Divider />
        <Text fontWeight={700} fontSize="1.2rem">
          Past activities
        </Text>
        <UnorderedList px="1rem">
          {profile &&
            profile.work_done.map(({ job_name }, index) => (
              <ListItem key={index} fontSize="md">
                {job_name}
              </ListItem>
            ))}
        </UnorderedList>

        <Divider />
        <Text fontWeight={700} fontSize="1.2rem">
          Comments
        </Text>
        <UnorderedList px="1rem">
          {profile &&
            profile.work_log.comment.map((comment, index) => (
              <ListItem>
                "{comment.content}" - {comment.user_name}
              </ListItem>
            ))}
        </UnorderedList>
      </Stack>
    </Container>
  );
};

export default UserCard;