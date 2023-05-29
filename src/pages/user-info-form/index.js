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
import { HOME, USER_INFO_FORM } from "../../utils/route_name";

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
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const db = firebase.firestore();

        // Query Firestore for users with a matching email
        const querySnapshot = await db
          .collection("users")
          .where("email", "==", persistUser.email)
          .get();

        if (!querySnapshot.empty) {
          setUser(querySnapshot.docs[0].data());
          console.log(user.docs[0].data());
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const updateUser = async () => {
      try {
        const data = { email: persistUser.email, ...formData };
        const db = firebase.firestore();

        // Update the user if it already exists
        if (user) {
          await db.collection("users").doc(user.id).update(data);
          console.log("User updated successfully!");
        }
      } catch (error) {
        console.error("Error adding/updating user:", error);
      }
    };

    updateUser();
  }, [
    formData.email,
    formData.firstName,
    formData.lastName,
    formData.dateOfBirth,
    formData.address,
    formData.bio,
  ]);

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
