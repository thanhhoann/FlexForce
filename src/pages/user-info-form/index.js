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
import { HOME, USER_INFO_FORM, USER_PROFILE } from "../../utils/route_name";
import { MdCloudUpload } from "react-icons/md";

import firebase, { app } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const storage = getStorage(app);

export default function UserInfoForm() {
  const toast = useToast();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileDownloadURL, setSelectedFileDownloadURL] = useState(null);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      console.log(selectedFile);
      try {
        // Create a storage reference to the file
        const storageRef = ref(storage, selectedFile.name);

        // Upload the file to Firestore storage
        const snapshot = await uploadBytes(storageRef, selectedFile);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(snapshot.ref);
        setSelectedFileDownloadURL(downloadURL);

        console.log(snapshot);

        // Handle success (e.g., display a success toast)
        toast({
          title: "File Upload",
          description: "File uploaded successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "bottom",
        });

        // Use the downloadURL as needed (e.g., save it to Firestore)
        console.log("Download URL:", downloadURL);
      } catch (error) {
        // Handle error (e.g., display an error toast)
        toast({
          title: "File Upload",
          description: "An error occurred while uploading the file.",
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "bottom",
        });

        console.error("File upload error:", error);
      }
    }
  };

  console.log(selectedFileDownloadURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: persistUser.email,
      resume: { name: selectedFile.name, downloadURL: selectedFileDownloadURL },
      ...formData,
    };

    const db = firebase.firestore();
    const userId = JSON.stringify(localStorage.getItem("firestore_userId"));
    console.log(userId);

    if (userId != "null") {
      console.log("user exists !");
      try {
        await db.collection("users").doc(userId.replace(/^"|"$/g, ""))
          .update(data);

        if (selectedFile) handleFileUpload();
        console.log(data);

        toast({
          title: "User Information",
          description: "🎉  Account updated successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          variant: "top-accent",
          position: "bottom",
        });
      } catch (error) {
        console.log("Error updating user ", error);
        toast({
          title: "User Information",
          description: "An error occurred while updating",
          status: "success",
          duration: 2000,
          isClosable: true,
          variant: "top-accent",
          position: "bottom",
        });
      }
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

          if (selectedFile) handleFileUpload();

          toast({
            title: "User Information",
            description: "✨ Added successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            variant: "top-accent",
            position: "bottom",
          });
          setTimeout(() => window.location.replace(HOME), 2000);
        } catch (error) {
          console.log("Error adding user", error);
        }
      } else {
        toast({
          title: "User Information",
          description: "An error occurred while adding",
          status: "warning",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
          variant: "top-accent",
          position: "bottom",
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
                <FormLabel>Resume</FormLabel>
                <Input type="file" onChange={handleFileChange} />
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
