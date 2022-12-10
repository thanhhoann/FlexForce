import React, { useState } from 'react';
import {
  Image,
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Center,
  Text,
  Spinner,
  InputLeftElement,
  InputRightAddon,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import UserCard from '../UserCard';
import { LoadingGif, SuccessGif } from '../../assets/AssetUtil';

export default function FindWorkersForm({ getBookInfo }) {
  const [typeOfJob, setTypeOfJob] = React.useState('');
  const [streetAddress, setStreetAddress] = React.useState('');
  const [transactionMethod, setTransactionMethod] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [totalWorkingHours, setTotalWorkingHours] = React.useState();
  const [salaryPerHour, setSalaryPerHour] = React.useState();
  const [totalSalary, setTotalSalary] = React.useState();

  const [isDisableBook, setIsDisableBook] = React.useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAcceptBooking, setIsAcceptBooking] = React.useState(false);

  React.useEffect(() => {
    if (
      typeOfJob.length > 0 &&
      streetAddress.length > 0 &&
      transactionMethod.length > 0 &&
      startTime.length > 0
    )
      setIsDisableBook(false);
    else setIsDisableBook(true);
  }, [description, startTime, streetAddress, transactionMethod, typeOfJob]);

  const handleAcceptBooking = () => {
    setIsLoading(false);
    setIsAcceptBooking(true);

    setTimeout(() => {
      onClose();
      setIsAcceptBooking(false);
      window.location.reload();
      window.location.replace('/');
    }, 1500);
  };

  const book = () => {
    setIsLoading(true);
    const bookInfo = {
      type_of_job: typeOfJob,
      street_address: streetAddress,
      start_time: startTime,
      transaction_method: transactionMethod,
      description: description,
    };

    // open modal
    onOpen();

    // set loading state
    setTimeout(() => setIsLoading(false), Math.floor(Math.random() * 3000));

    // reset forms
    setTypeOfJob('');
    setStreetAddress('');
    setStartTime('');
    setTransactionMethod('');
    setDescription('');

    // reset accept booking state
  };

  return (
    <>
      <Box rounded="lg" maxWidth={800} p={6} m="10px auto" as="form">
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Hiring Information
        </Heading>

        {/* type of job */}
        <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
            onChange={e => setTypeOfJob(e.target.value)}
          >
            <option>Presence Hiring</option>
            <option>Landyard Work</option>
            <option>Chores</option>
            <option>Clarical Work</option>
            <option>Pet Care</option>
          </Select>
        </FormControl>

        {/* street address */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            htmlFor="street_address"
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
            Street address
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
            value={streetAddress}
            onChange={e => setStreetAddress(e.target.value)}
          />
        </FormControl>

        {/* start time */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
            onChange={e => setStartTime(e.target.value)}
          />
        </FormControl>

        {/* total working hours */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
              onChange={e => setTotalWorkingHours(e.target.value)}
            />
            <InputRightAddon children="hours" />
          </InputGroup>
        </FormControl>

        {/* salary per hour */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
              onChange={e => setSalaryPerHour(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        {/* total salary */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
              value={totalSalary}
              onChange={e => setTotalSalary(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        {/* transaction method */}
        <FormControl as={GridItem} colSpan={[6, 3]} mt="5" isRequired>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
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
            onChange={e => setTransactionMethod(e.target.value)}
          >
            <option>Momo</option>
            <option>Paypal</option>
          </Select>
        </FormControl>

        {/* description */}
        <FormControl id="description" mt={5}>
          <FormLabel
            font
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
          >
            Description
          </FormLabel>
          <Textarea
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormControl>

        <Button mt={5} onClick={book} isDisabled={isDisableBook}>
          Book now
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            {isLoading ? (
              <Center flexDir="column" mb="2rem">
                <Image w="20rem" src={LoadingGif} />
                <Text fontWeight={700} fontSize="2xl">
                  Finding your match ...
                </Text>
              </Center>
            ) : isAcceptBooking ? (
              <Center>
                <Image src={SuccessGif} w="10rem" />
              </Center>
            ) : (
              <UserCard />
            )}
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