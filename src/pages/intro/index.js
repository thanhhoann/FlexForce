import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import doc from "./data.json";
import { useParallax } from "react-scroll-parallax";
import BoxContent from "./BoxContent";

export default function Intro() {
  return (
    <>
      <Box mt="8rem">
        <BoxContent title="Purpose">
          {doc.introduction.purpose}
        </BoxContent>

        <BoxContent title="Document Inventions">
          <UnorderedList>
            {doc.introduction.document_inventions.map((txt) => {
              return <ListItem>{txt}</ListItem>;
            })}
          </UnorderedList>
        </BoxContent>

        <BoxContent title="Product Scope">
          <UnorderedList>
            {doc.product_scope.map((txt) => {
              return <ListItem>{txt}</ListItem>;
            })}
          </UnorderedList>
        </BoxContent>

        <BoxContent title="Product Perspective">
          <UnorderedList>
            {doc.product_perspective.map((txt) => {
              return <ListItem>{txt}</ListItem>;
            })}
          </UnorderedList>
        </BoxContent>
      </Box>
    </>
  );
}
