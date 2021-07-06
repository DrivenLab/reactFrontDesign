import React from "react";
// import { Image, StyleSheet, View, TextInput, Platform } from "react-native";
import { Text, Button } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <>
      <Text>HOLA</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        Login
      </Button>
    </>
  );
};

export default Home;
