import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";

export default function HeroSectionButton({ text }) {
  return (
    <>
      <motion.div>
        <Button
          rounded={"1rem"}
          px={6}
          color={"white"}
          backgroundColor="gray.800"
          fontSize={"1.2rem"}
          fontWeight="800"
          _hover={{ backgroundColor: "gray.600" }}
        >
          {text}
        </Button>
      </motion.div>
    </>
  );
}
