import React, { useState } from 'react';
import {
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
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

export default function FindWorkersForm() {
  const [typeOfJob, setTypeOfJob] = React.useState('');
  const [streetAddress, setStreetAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [transactionMethod, setTransactionMethod] = React.useState('');
  const [description, setDescription] = React.useState('');

  const toast = useToast();

  const book = () => {
    const bookInfo = {
      type_of_job: typeOfJob,
      street_address: streetAddress,
      city: city,
      transaction_method: transactionMethod,
      description: description,
    };
    console.log(bookInfo);
  };

  return (
    <>
      <Box rounded="lg" maxWidth={800} p={6} m="10px auto" as="form">
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Hiring Information
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
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
            id="country"
            name="country"
            autoComplete="country"
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

        <FormControl as={GridItem} colSpan={6}>
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

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
            City
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]} mt="5">
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

        <Button mt={5} onClick={book}>
          Book now
        </Button>
      </Box>
    </>
  );
}
