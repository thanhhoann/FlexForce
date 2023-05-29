import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function UserInfoBox({ title, content }) {
  return (
    <>
      <Box>
        <Heading size="sm">{title}</Heading>
        <Text>{content ?? "NOT GIVEN"}</Text>
      </Box>
    </>
  );
}
