import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import FindWorkersForm from "../../components/FindWorkersForm";

export default function FindWorkers() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookInfo, setBookInfo] = React.useState();

  if (bookInfo) {
    console.log(bookInfo);
  }

  // React.useEffect(() => {
  //   setTimeout(() => onOpen(), 2000);
  // }, [bookInfo]);

  return (
    <>
      <FindWorkersForm getBookInfo={(e) => setBookInfo(e)} />
    </>
  );
}
