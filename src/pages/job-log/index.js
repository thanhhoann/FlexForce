import { Box, Center, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import BookingDetailsBox from "./BookingDetailsBox";

export default function JobLog() {
  const [docs, setDocs] = useState(null);
  const [docsWORKER, setDocsWORKER] = useState(null);

  useEffect(() => {
    // Create a Firestore instance
    const firestore = getFirestore();

    // Query documents based on email field
    const getDocumentsByEmail = async () => {
      try {
        const q = query(
          collection(firestore, "job_log"),
          where("email", "==", persistUser.email),
        );
        const querySnapshot = await getDocs(q);

        const fetchedDocs = [];
        querySnapshot.forEach((doc) => {
          fetchedDocs.push(doc.data().bookingDetails);
        });
        setDocs(fetchedDocs);
      } catch (error) {
        console.error("Error retrieving documents: ", error);
      }
    };

    const getDocumentsByEmail_WORKER = async () => {
      try {
        const q = query(
          collection(firestore, "job_log_WORKER"),
          where("email", "==", persistUser.email),
        );
        const querySnapshot = await getDocs(q);

        const fetchedDocs = [];
        querySnapshot.forEach((doc) => {
          fetchedDocs.push(doc.data().job);
        });
        setDocsWORKER(fetchedDocs);
      } catch (error) {
        console.error("Error retrieving documents: ", error);
      }
    };

    if (localStorage.getItem("role") == "CLIENT") {
      getDocumentsByEmail();
    } else {
      getDocumentsByEmail_WORKER();
    }
  }, []);

  return (
    <>
      <Box mt="8rem" ml="2rem">
        <Heading mb="3rem">Job Log</Heading>

        <Flex gap="1rem">
          {docs && localStorage.getItem("role") == "CLIENT" &&
            docs.map((doc) => (
              <BookingDetailsBox
                book={doc.book}
                booked={doc.booked}
                userType="CLIENT"
              />
            ))}
          {docsWORKER && localStorage.getItem("role") == "WORKER" &&
            docsWORKER.map((doc) => (
              <BookingDetailsBox booked={doc} userType="WORKER" />
            ))}
        </Flex>

        {(!docs && localStorage.getItem("role") == "CLIENT") &&
          (
            <>
              <Center w="100vw" h="50vh">
                <Spinner size="xl" />
              </Center>
            </>
          )}
        {(!docsWORKER && localStorage.getItem("role") == "WORKER") &&
          (
            <>
              <Center w="100vw" h="50vh">
                <Spinner size="xl" />
              </Center>
            </>
          )}
      </Box>
    </>
  );
}
