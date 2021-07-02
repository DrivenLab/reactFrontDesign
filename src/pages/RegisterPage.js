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
  Box
} from "native-base";

import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { color, textAlign } from "styled-system";

import Http from "../libs/http";

const Register = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.centerContainer}>
        <Text>Página de registro...</Text>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

export default Register;
