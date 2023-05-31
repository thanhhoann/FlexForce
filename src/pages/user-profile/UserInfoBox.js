import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  DownloadIcon,
  ExternalLinkIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

export default function UserInfoBox({ title, content, contentType = "text" }) {
  return (
    <>
      <Box>
        {contentType == "text" &&
          (
            <>
              <Heading size="sm">{title}</Heading>
              <Text>{content ?? "NOT GIVEN"}</Text>
            </>
          )}

        {contentType == "link" &&
          (
            <>
              <Heading size="sm">Resume</Heading>
              <Link isExternal href={content}>
                {title} {content ? <ViewIcon /> : <ViewOffIcon />}
              </Link>
            </>
          )}
      </Box>
    </>
  );
}
