import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import { useEffect, useState } from "react";
import { leadingColor } from "../../utils/colors";
export default function UserProfile() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (persistUser.email) setEmail(persistUser.email);
  }, []);

  return (
    <>
      <Box mt="8rem" ml="2rem">
        <Heading>
          Hi there, <span style={{ color: leadingColor }}>{email}</span>
        </Heading>

        <Flex>
          <Avatar
            size={"2xl"}
            src={`https://api.dicebear.com/6.x/notionists/svg?seed=${persistUser.email}`}
          />
        </Flex>
      </Box>
    </>
  );
}
