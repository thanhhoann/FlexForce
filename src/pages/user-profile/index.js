import { Box, Heading } from "@chakra-ui/react";
import { persistUser } from "../../utils/helpers/local-storage.helper";
export default function UserProfile() {
  return (
    <>
      <Box mt="8rem" ml="2rem">
        <Heading>
          Hi there, {persistUser.email}
        </Heading>
      </Box>
    </>
  );
}
