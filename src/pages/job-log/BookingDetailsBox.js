import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function BookingDetailsBox({ book, booked, userType }) {
  return (
    <>
      {userType == "CLIENT"
        ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Flex
              boxShadow="lg"
              justifyContent="space-around"
              p="1rem"
              rounded="1rem"
              gap="2rem"
            >
              <Box>
                <Heading mb="0.5rem" size="md">Hiring Info</Heading>
                <Text>Type of job : {book.type_of_job}</Text>
                <Text>Transaction Method : {book.transaction_method}</Text>
                <Text>Start time : {book.start_time}</Text>
              </Box>
              <Center>
                <Divider orientation="vertical" />
              </Center>
              <Box>
                <Heading mb="0.5rem" size="md">Worker Info</Heading>
                <Box>
                  <Text>ID : {booked.user_id}</Text>
                  <Text>Name : {booked.user_name}</Text>
                  <Text>Address : {booked.home_address}</Text>
                </Box>
              </Box>
            </Flex>
          </motion.div>
        )
        : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Flex
              boxShadow="lg"
              justifyContent="space-around"
              p="1rem"
              rounded="1rem"
              gap="2rem"
            >
              <Box>
                <Heading mb="0.5rem" size="md">Job Info</Heading>
                <Text>Type of job : {booked.type_of_job}</Text>
                <Text>Transaction Method : {booked.transaction_method}</Text>
                <Text>Start time : {booked.start_time}</Text>
                <Text>Street address : {booked.street_address}</Text>
                <Text>Total Salary : {booked.total_salary}</Text>
                <Text>Total Working Hours : {booked.total_working_hours}</Text>
              </Box>
            </Flex>
          </motion.div>
        )}
    </>
  );
}
