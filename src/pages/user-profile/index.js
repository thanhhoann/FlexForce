import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import { useEffect, useState } from "react";
import { leadingColor } from "../../utils/colors";
import AvatarCard from "../../components/AvatarCard";
import UserInfoBox from "./UserInfoBox";
import firebase from "../../firebase";
import { USER_INFO_FORM } from "../../utils/route_name";

export default function UserProfile() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (persistUser.email) setEmail(persistUser.email);
  }, []);

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
          console.log(user);
        } else {
          window.location.replace(USER_INFO_FORM);
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Flex w="100vw" mt="8rem" ml="2rem">
        <Flex>
          {persistUser.photoURL
            ? (
              <Avatar
                w={"20rem"}
                h={"20rem"}
                src={persistUser.photoURL}
              />
            )
            : (
              <Avatar
                src={`https://api.dicebear.com/6.x/notionists/svg?seed=${persistUser.email}`}
              />
            )}
        </Flex>

        <Stack ml="5rem" mt="5rem">
          {user
            ? (
              <>
                <Flex gap="3rem">
                  <UserInfoBox title="First Name" content={user.firstName} />
                  <UserInfoBox title="Last Name" content={user.lastName} />
                </Flex>
                <UserInfoBox title="Date of Birth" content={user.dateOfBirth} />
                <UserInfoBox
                  title="Street Address"
                  content={user.address}
                />
                <UserInfoBox title="Bio" content={user.bio} />
                <UserInfoBox
                  contentType="link"
                  title={user.resume.name}
                  content={user.resume.downloadURL}
                />
              </>
            )
            : (
              <>
                <Flex
                  gap="3rem"
                  px={5}
                  py={3}
                  boxShadow={"lg"}
                  rounded={"1rem"}
                >
                  <Spinner size="lg" />
                  <Heading size="md">Getting your information</Heading>
                </Flex>
              </>
            )}

          <Link href={USER_INFO_FORM}>
            <Button>Edit</Button>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}
