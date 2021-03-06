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
import { shadow, inputStyle, flex } from "../../res/styles";
import { colors, textColors, bgColors } from "../../res/colors";

export default ({ error, handleClose }) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      width="100%"
      zIndex={1000}
      bgColor="transparent"
      mb={5}
      style={flex("row", "center")}
    >
      {!!error && (
        <Box
          width="90%"
          shadow={8}
          position="static"
          bgColor="#ed6a4e"
          borderRadius={10}
          py={3}
          pl={2}
          borderTopWidth={5}
          borderTopColor="#f9b6a8"
          style={flex("row", "center")}
        >
          <WarningIcon color="#fff" size="80px" />
          <Text color="#fff" fontWeight="bold" fontSize={18} pl={3}>
            {error}
          </Text>
          <Button bgColor="transparent" onPress={handleClose}>
            <CloseIcon color="#fff" size="19px" />
          </Button>
        </Box>
      )}
    </Box>
  );
};
