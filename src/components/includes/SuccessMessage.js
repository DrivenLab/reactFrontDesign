import React from "react";
// import { Image, StyleSheet, View, TextInput, Platform } from "react-native";
import {
  Form,
  Container,
  Button,
  Text,
  H1,
  Input,
  Item,
  NativeBaseProvider,
  Center,
  FormControl,
  Stack,
  Box,
  ArrowForwardIcon,
  WarningIcon,
  CloseIcon
} from "native-base";

import { StyleSheet, View } from "react-native";

export default ({ msg, handleClose }) => {
  return (
    <Box position="relative" width="104%" zIndex={1000}>
      {!!msg && (
        <Box
          shadow={8}
          position="absolute"
          top="-5px"
          bgColor="#4BB543"
          borderRadius={10}
          display="flex"
          flexDirection="row"
          alignItems="center"
          py={3}
          pl={2}
          borderTopWidth={5}
          borderTopColor="#f9b6a8"
        >
          <WarningIcon color="#fff" size="80px" />
          <Text color="#fff" fontWeight="bold" fontSize={18} pl={3}>
            {msg}
          </Text>
          <Button bgColor="transparent" onPress={handleClose}>
            <CloseIcon color="#fff" size="19px" />
          </Button>
        </Box>
      )}
    </Box>
  );
};
