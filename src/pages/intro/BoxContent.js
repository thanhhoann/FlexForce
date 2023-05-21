import { Box, Divider, Heading } from "@chakra-ui/react";

export default function BoxContent({ title, titleSize, fontStyle, children }) {
  return (
    <>
      <Box
        w="96vw"
        h="auto"
        m="1rem"
        p="1rem"
        rounded="1rem"
        border="1px solid black"
      >
        <Heading fontWeight={1000} size={titleSize} fontStyle={fontStyle}>
          {title}
        </Heading>

        {children &&
          <Divider my="0.7rem" />}

        <Box fontSize={"1rem"}>
          {children}
        </Box>
      </Box>
    </>
  );
}
