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
      <Box h="10vh" rounded="lg" maxWidth={800} p={6} m="10px auto" as="form">
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Hiring Information
        </Heading>

        {/* type of job */}
        <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
          <FormLabel
            fontSize="sm"
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
            size="sm"
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
            fontSize="sm"
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
            size="sm"
            w="full"
            rounded="md"
            value={streetAddress}
            onChange={e => setStreetAddress(e.target.value)}
          />
        </FormControl>

        {/* start time */}
        <FormControl as={GridItem} colSpan={6} isRequired>
          <FormLabel
            fontSize="sm"
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
            size="sm"
            w="full"
            rounded="md"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
          />
        </FormControl>

        {/* transaction method */}
        <FormControl as={GridItem} colSpan={[6, 3]} mt="5" isRequired>
          <FormLabel
            fontSize="sm"
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
            size="sm"
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
            fontSize="sm"
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

        <Button mt={5} onClick={book} isDisabled={false}>
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
              <Button colorScheme="red" onClick={onClose}>
                Deny
              </Button>
              <Button colorScheme="orange" mx={3} onClick={onClose}>
                Negotiate
              </Button>
              <Button colorScheme="green" onClick={handleAcceptBooking}>
                Accept
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
