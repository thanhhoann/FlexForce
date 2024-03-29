import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Select,
  SimpleGrid,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import UserCard from "../UserCard";
import {
  CheckSvg,
  FindSvg,
  LoadingGif,
  SuccessGif,
} from "../../assets/AssetUtil";
import { FIND_WORKERS } from "../../utils/route_name";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { persistUser } from "../../utils/helpers/local-storage.helper";

import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default function FindWorkersForm({ getBookInfo }) {
  const [typeOfJob, setTypeOfJob] = React.useState("");
  const [streetAddress, setStreetAddress] = React.useState("");
  const [transactionMethod, setTransactionMethod] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [totalWorkingHours, setTotalWorkingHours] = React.useState();
  const [salaryPerHour, setSalaryPerHour] = React.useState();
  const [totalSalary, setTotalSalary] = React.useState();

  const [isDisableBook, setIsDisableBook] = React.useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAcceptBooking, setIsAcceptBooking] = React.useState(false);

  const [selectedWorker, setSelectedWorker] = React.useState(null);

  React.useEffect(() => {
    if (
      typeOfJob.length > 0 &&
      transactionMethod.length > 0 &&
      startTime.length > 0
    ) {
      setIsDisableBook(false);
    } else setIsDisableBook(true);
  }, [description, startTime, streetAddress, transactionMethod, typeOfJob]);

  const handleAcceptBooking = async () => {
    setIsLoading(false);
    setIsAcceptBooking(true);

    const bookInfo = {
      type_of_job: typeOfJob,
      start_time: startTime,
      transaction_method: transactionMethod,
      description: description,
    };

    const bookingDetails = {
      book: bookInfo,
      booked: selectedWorker,
    };

    console.log("booking details ", bookingDetails);

    const firestore = getFirestore();

    try {
      const docRef = await addDoc(
        collection(firestore, "job_log"),
        {
          email: persistUser.email,
          bookingDetails,
        },
      );
      console.log("Document added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // reset forms
    setTypeOfJob("");
    setStreetAddress("");
    setStartTime("");
    setTransactionMethod("");
    setSalaryPerHour("");
    setTotalSalary("");
    setTotalWorkingHours("");
    setDescription("");

    setTimeout(() => {
      onClose();
      setIsAcceptBooking(false);
    }, 1500);
  };

  const book = () => {
    setIsLoading(true);

    // open modal
    onOpen();

    // set loading state
    setTimeout(() => setIsLoading(false), Math.floor(Math.random() * 3000));
  };

  const handleDataFromUserCard = (worker) => {
    setSelectedWorker(worker);
  };

  return (
    <>
      <Box rounded="lg" maxWidth={800} p={6} m="10px auto" as="form" mt="7rem">
        <Heading w="100%" textAlign={"center"} fontWeight="800" mb="2%">
          Hiring Information
        </Heading>

        {/* type of job */}
        <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
          <FormLabel
            font
            fontWeight="700"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Type of job
          </FormLabel>
          <Select
            id="type_of_job"
            name="type_of_job"
            autoComplete="type-of-job"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
            value={typeOfJob}
            onChange={(e) => setTypeOfJob(e.target.value)}
          >
            <option value="Software Engineer">Software Engineer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Network Administrator">Network Administrator</option>
            <option value="System Administrator">System Administrator</option>
            <option value="Database Administrator">
              Database Administrator
            </option>
            <option value="Cyber Security Specialist">
              Cyber Security Specialist
            </option>
            <option value="Cloud Architect">Cloud Architect</option>
          </Select>
        </FormControl>

        {/* start time */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            font
            fontWeight="700"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Start Time
          </FormLabel>
          <Input
            type="datetime-local"
            name="start_time"
            id="start_time"
            autoComplete="start-time"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </FormControl>

        <Flex gap="1rem" mt="1rem">
          {/* salary per hour */}
          <FormControl as={GridItem} colSpan={6} isRequired>
            <FormLabel
              font
              fontWeight="700"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
              mt="2%"
            >
              Salary Per Hour
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.1rem"
                children="$"
              />
              <Input
                type="number"
                name="salay_per_hour"
                id="salay_per_hour"
                focusBorderColor="brand.400"
                shadow="sm"
                w="full"
                rounded="md"
                value={salaryPerHour}
                onChange={(e) => setSalaryPerHour(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          {/* total working hours */}
          <FormControl as={GridItem} colSpan={6} isRequired>
            <FormLabel
              font
              fontWeight="700"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
              mt="2%"
            >
              Total Working Hours
            </FormLabel>
            <InputGroup>
              <Input
                type="number"
                name="total_working_hours"
                id="total_working_hours"
                focusBorderColor="brand.400"
                shadow="sm"
                w="full"
                rounded="md"
                value={totalWorkingHours}
                onChange={(e) => setTotalWorkingHours(e.target.value)}
              />
              <InputRightAddon children="hours" />
            </InputGroup>
          </FormControl>
        </Flex>

        {/* total salary */}
        <FormControl as={GridItem} colSpan={6} isReadOnly>
          <FormLabel
            font
            fontWeight="700"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Total Salary
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.1rem"
              children="$"
            />
            <Input
              type="number"
              name="total_salary"
              id="total_salary"
              focusBorderColor="brand.400"
              shadow="sm"
              w="full"
              rounded="md"
              value={totalWorkingHours * salaryPerHour}
              onChange={(e) => setTotalSalary(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        {/* transaction method */}
        <FormControl as={GridItem} colSpan={[6, 3]} mt="5" isRequired>
          <FormLabel
            font
            fontWeight="700"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Transaction Method
          </FormLabel>
          <Select
            id="transaction"
            name="transaction"
            autoComplete="transaction"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
            value={transactionMethod}
            onChange={(e) => setTransactionMethod(e.target.value)}
          >
            <option>Momo</option>
            <option>Paypal</option>
          </Select>
        </FormControl>

        {/* description */}
        <FormControl id="description" mt={5}>
          <FormLabel
            font
            fontWeight="700"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Note
          </FormLabel>
          <Textarea
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Button mt={5} onClick={book} isDisabled={isDisableBook}>
          Book now
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box py="1rem">
              {isLoading
                ? (
                  <Center flexDir="column" mb="2rem">
                    <Text fontWeight={700} fontSize="2xl">
                      Finding your match ...
                    </Text>
                  </Center>
                )
                : isAcceptBooking
                ? (
                  <Center p="1rem">
                    <Box textAlign="center" py={10} px={6}>
                      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                      <Heading as="h2" size="xl" mt={6} mb={2}>
                        Successfully
                      </Heading>
                      <Text color={"gray.500"}>
                        Heading back to find your next jobmate ...
                      </Text>
                    </Box>
                  </Center>
                )
                : <UserCard sendDataToParent={handleDataFromUserCard} />}
            </Box>
          </ModalBody>

          {!isAcceptBooking && (
            <ModalFooter>
              <Center w="full" mx="2rem" gap="3rem">
                <Button colorScheme="red" onClick={onClose}>
                  Deny
                </Button>
                <Button colorScheme="green" onClick={handleAcceptBooking}>
                  Accept
                </Button>
              </Center>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
