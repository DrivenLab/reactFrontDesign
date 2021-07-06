import React from "react";
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
import { colors, textColors, bgColors } from "../../res/colors";

const validationButton = ({ title, isValid, loading, loadingMsg, onPress }) => {
  return (
    <Button
      w="100%"
      h="53px"
      bgColor={colors.accent}
      opacity={isValid ? 1 : 0.7}
      borderRadius={5}
      onPress={onPress}
      isLoading={loading}
      isLoadingText={loadingMsg}
      zIndex={-1}
      _text={{
        color: "white",
        fontWeight: "bold",
        fontSize: 18
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        _text={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18
        }}
      >
        {title}
        {!loading && <ArrowForwardIcon px={1} size={7} color="#fff" />}
      </Box>
    </Button>
  );
};

export default validationButton;
