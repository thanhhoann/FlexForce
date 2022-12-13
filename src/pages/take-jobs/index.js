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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { CheckSvg, MapSvg } from '../../assets/AssetUtil';

export default function TakeJobs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAccept, setIsAccept] = React.useState(false);
  const [noWorkers, setNoWorkers] = React.useState(100);
  let [startIndex, setStartIndex] = React.useState(0);
  const [modifiedList, setModifiedList] = React.useState();

  React.useEffect(() => {
    setStartIndex(startIndex++);
  }, [startIndex]);

  // const handleDeny = () => {
  //   setStartIndex(startIndex => startIndex++);
  //   setModifiedList(jobs.slice(0, startIndex));
  //   console.log(modifiedList);
  // };

  const handleAccept = () => {
    setIsAccept(true);
    onOpen();

    setTimeout(() => {
      onClose();
      setIsAccept(false);
      window.location.reload();
      window.location.replace('/');
    }, 1500);
  };

  return (
    <>
      <Image src={MapSvg} pos="absolute" zIndex={0} />

      <Flex
        h="230vh"
        flexDir="column"
        gap="3rem"
        pos="absolute"
        zIndex={1}
        top="7rem"
        right="3rem"
        overflow="scroll"
      >
        {jobs.slice(startIndex, 100).map((job, index) => (
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
              <Button
                colorScheme="red"
                onClick={() => setStartIndex(startIndex++)}
              >
                Deny
              </Button>
              <Button colorScheme="green" onClick={handleAccept}>
                Accept
              </Button>
            </Center>
          </Stack>
        ))}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Center p="1rem">
              <Image src={CheckSvg} w="10rem" />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
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
