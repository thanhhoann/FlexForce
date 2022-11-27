import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import FindWorkersForm from '../../components/FindWorkersForm';

export default function FindWorkers() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookInfo, setBookInfo] = React.useState();

  if (bookInfo) {
    console.log(bookInfo);
  }

  React.useEffect(() => {
    setTimeout(() => onOpen(), 2000);
  }, [bookInfo]);

  return (
    <>
      <FindWorkersForm getBookInfo={e => setBookInfo(e)} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
