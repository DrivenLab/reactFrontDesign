import React from "react";
// import { Image, StyleSheet, View, TextInput, Platform } from "react-native";
import {
  Form,
  Container,
  Button,
  Text,
  H1,
  Input,
  NativeBaseProvider,
  Center,
  FormControl,
  Stack,
  Box,
  ArrowForwardIcon,
  WarningIcon,
  CloseIcon
} from "native-base";
import { shadow, inputStyle, flex } from "../../res/styles";
import { colors, textColors, bgColors } from "../../res/colors";

const waveBox = (index = 0) => {
  const size = 250;
  const translateX = (1 - Math.sqrt(2) / 1.6) * size * index;
  return (
    <Box
      style={[
        flex("column"),
        {
          position: "relative",
          top: "-140%",
          transform: [{ translateX: translateX }, { rotate: "40deg" }]
        }
      ]}
    >
      <Box
        width={size}
        bgColor={colors.white}
        height={size}
        borderRadius={40}
      ></Box>
      <Box
        width={size}
        bgColor={colors.primary}
        height={size}
        borderRadius={40}
      ></Box>
    </Box>
  );
};

const BackWaves = () => {
  return (
    <Box
      width="100%"
      bgColor={colors.primary}
      position="absolute"
      bottom={0}
      left="0px"
      opacity={0.9}
      height="40%"
      zIndex={-1}
    >
      <Box style={[flex("row"), { transform: [{ scaleY: 0.4 }] }]}>
        {waveBox()}
        {waveBox(1)}
        {waveBox(2)}
        {waveBox(3)}
      </Box>
    </Box>
  );
};

export default BackWaves;
