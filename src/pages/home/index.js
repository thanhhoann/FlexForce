import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection";
import { authActions, userSelect } from "../../slices/authSlice";
import { ColorModeSwitcher } from "../../utils/helpers/color-mode.helper";
import { persistUser } from "../../utils/helpers/local-storage.helper";
import TestimonialWithSpeechBubbles from "../../components/TestimonialWithSpeechBubbles";
import { persistAuthStatus } from "../../utils/helpers/local-storage.helper";
import { AuthStatus } from "../../slices/authSlice";
import scrollDownGIF from "../../assets/gifs/scroll-down.gif";
import { purple_1 } from "../../utils/colors";
import TestimonialWithCards from "../../components/TestimonialWithCards";
import firebase from "../../firebase";
import { USER_INFO_FORM } from "../../utils/route_name";

export default function Home() {
  const dispatch = useDispatch();
  const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
  const [role, setRole] = useState("");

  useEffect(() => {
    if (persistAuthStatus === AuthStatus.UNAUTHORIZED) {
      window.location.replace("sign-in");
    } else {
      if (
        localStorage.getItem("role") === null &&
        persistAuthStatus === AuthStatus.AUTHORIZED
      ) {
        window.location.replace("pick-role");
      } else {
        const roleFromLocalStorage = localStorage.getItem("role");
        setRole(roleFromLocalStorage);
      }
    }

    const fetchUser = async () => {
      try {
        const db = firebase.firestore();

        // Query Firestore for users with a matching email
        const querySnapshot = await db
          .collection("users")
          .where("email", "==", persistUser.email)
          .get();

        if (querySnapshot.empty) {
          window.location.replace(USER_INFO_FORM);
        } else {
          localStorage.setItem("firestore_userId", querySnapshot.docs[0].id);
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <HeroSection role={role} />
      <TestimonialWithCards />
      <TestimonialWithSpeechBubbles />
    </>
  );
}
