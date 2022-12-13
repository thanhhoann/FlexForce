import React from 'react';
import jobs from '../../utils/sample_workers.json';
import {
  Button,
  Badge,
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MapSvg } from '../../assets/AssetUtil';

export default function TakeJobs() {
  console.log(jobs);

  return (
    <>
      <Image src={MapSvg} pos="absolute" zIndex={0} />

      <Flex
        flexDir="column"
        gap="3rem"
        pos="absolute"
        zIndex={1}
        top="7rem"
        right="3rem"
      >
        {jobs.slice(0, 5).map((job, index) => (
          <Stack
            p="1rem"
            rounded="10px"
            bg="rgba( 255, 255, 255, 0.25 )"
            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
            backdropFilter="blur( 4px )"
            border="1px solid rgba( 255, 255, 255, 0.18 )"
            w="20rem"
          >
            <TakeJobsComponent
              title={'Type of job'}
              content={job.type_of_job}
            />
            <TakeJobsComponent
              title={'Street address'}
              content={job.street_address}
            />
            <TakeJobsComponent title={'Start time'} content={job.start_time} />
            <TakeJobsComponent
              title={'Salary per hour'}
              content={job.salary_per_hour}
            />
            <TakeJobsComponent
              title={'Total working hours'}
              content={job.total_working_hours}
            />
            <TakeJobsComponent
              title={'Total salary'}
              content={job.total_salary}
            />
            <TakeJobsComponent
              title={'Transaction method'}
              content={job.transaction_method}
            />
            <TakeJobsComponent
              title={'Description'}
              content={job.description}
            />
            <Center w="full" mx="2rem" gap="3rem">
              <Button colorScheme="red">Deny</Button>
              <Button colorScheme="green">Accept</Button>
            </Center>
          </Stack>
        ))}
      </Flex>
    </>
  );
}

const TakeJobsComponent = ({ title, content }) => {
  return (
    <Box w="fit-content">
      <Flex align="center" gap="0.7rem">
        <Badge>{title}</Badge>
        <Text>{content}</Text>
      </Flex>
    </Box>
  );
};
