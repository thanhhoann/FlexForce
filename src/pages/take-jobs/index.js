import React from "react";
import jobs from "../../utils/sample_workers.json";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckSvg, MapSvg } from "../../assets/AssetUtil";
import BackdropLoading from "../../components/BackdropLoading";
import { faker } from "@faker-js/faker";

import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { persistUser } from "../../utils/helpers/local-storage.helper";

export default function TakeJobs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAccept, setIsAccept] = React.useState(false);
  const [noWorkers, setNoWorkers] = React.useState(100);
  let [startIndex, setStartIndex] = React.useState(0);
  const [modifiedList, setModifiedList] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setStartIndex(startIndex++);
  }, [startIndex]);

  // const handleDeny = () => {
  //   setStartIndex(startIndex => startIndex++);
  //   setModifiedList(jobs.slice(0, startIndex));
  //   console.log(modifiedList);
  // };

  const handleAccept = async () => {
    setIsLoading(true);

    const firestore = getFirestore();
    const randomValue = Math.floor(Math.random() * 100) + 1;
    const job = jobs.slice(randomValue, 100)[0];

    try {
      const docRef = await addDoc(
        collection(firestore, "job_log_WORKER"),
        {
          email: persistUser.email,
          job: job,
        },
      );
      console.log("Document added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setTimeout(() => {
      setIsLoading(false);
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
              title={"Type of job"}
              content={job.type_of_job}
            />
            <TakeJobsComponent
              title={"Street address"}
              content={job.street_address}
            />
            <TakeJobsComponent title={"Start time"} content={job.start_time} />
            <TakeJobsComponent
              title={"Salary per hour"}
              content={job.salary_per_hour}
            />
            <TakeJobsComponent
              title={"Total working hours"}
              content={job.total_working_hours}
            />
            <TakeJobsComponent
              title={"Total salary"}
              content={job.total_salary}
            />
            <TakeJobsComponent
              title={"Transaction method"}
              content={job.transaction_method}
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

      {isLoading && <BackdropLoading />}
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
