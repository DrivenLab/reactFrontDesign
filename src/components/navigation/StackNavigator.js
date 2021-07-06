// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import HomePage from "../../pages/HomePage";
import BottomTabNavigator from "./TabNavigator";
import { colors, textColors, bgColors } from "../../res/colors";

const LoginStack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          fontColor: "#000", // ??
          shadowColor: "#000"
        },
        headerTintColor: "#FFF"
      }}
    >
      <LoginStack.Screen
        name="HomePage"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          fontColor: "#000", // ??
          shadowColor: "#000"
        },
        headerTintColor: "#FFF"
      }}
    >
      <HomeStack.Screen name="Home" component={HomePage} />
    </HomeStack.Navigator>
  );
};

export { LoginStackNavigator, HomeStackNavigator };
