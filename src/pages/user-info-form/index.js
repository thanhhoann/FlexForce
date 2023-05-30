import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import firebase from "../../firebase";
import { HOME, USER_INFO_FORM, USER_PROFILE } from "../../utils/route_name";

export default function UserInfoForm() {
  const toast = useToast();
  const [user, setUser] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    bio: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email: persistUser.email, ...formData };

    const db = firebase.firestore();
    const user = firebase.firestore().collection("users").doc(
      JSON.stringify(localStorage.getItem("firestore_userId")),
    );
    const userId = JSON.stringify(localStorage.getItem("firestore_userId"));
    console.log(userId);

    if (userId != "null") {
      console.log("user exists !");
      await db.collection("users").doc(userId.replace(/^"|"$/g, ""))
        .update(data);

      toast({
        title: "Account updated.",
        description: "Heading back to Profile page",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => window.location.replace(USER_PROFILE), 3000);
    } else if (userId == "null") {
      console.log("user doesnt exists !");
      if (
        formData.firstName.length != 0 || formData.lastName.length != 0 ||
        formData.address.length != 0 || formData.dateOfBirth.length != 0 ||
        formData.bio.length != 0
      ) {
        try {
          const db = firebase.firestore();
          await db.collection("users").add(data);

          toast({
            title: "Account created.",
            description: "Heading back to Home",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setTimeout(() => window.location.replace(HOME), 3000);
        } catch (error) {
          console.log("Error adding user", error);
        }
      } else {
        toast({
          title: "Please fill in all your information",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Box mt="8rem">
        <Box textAlign="center">
          <Heading size="2xl">User Information</Heading>
        </Box>
        <Box p="1.5rem" boxShadow="lg" mx="2rem" rounded="1rem">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch" mx={1} mt={1} mb={3}>
              <Flex gap="1rem">
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    isRequired
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    isRequired
                  />
                </FormControl>
              </Flex>

              <FormControl isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Street Address</FormLabel>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Bio</FormLabel>
                <Textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Write something about you"
                  isRequired
                />
              </FormControl>

              <Button
                colorScheme="linkedin"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  );
}
