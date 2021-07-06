import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "./res/colors";

import "./res/styles.css";
import "react-phone-input-2/lib/style.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTabNavigator from "./components/navigation/TabNavigator";
import { LoginStackNavigator } from "./components/navigation/StackNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("asdfg");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("asdfg");
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // Inject style
    const style = document.createElement("style");
    style.textContent = `textarea, select, input, button { outline: none!important; border:0px solid #000 !important; }`;
    return document.head.append(style);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <LoginStackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleText: {
    color: "#fff",
    textAlign: "center"
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: "#fff",
    textAlign: "center"
  },
  loader: {
    marginTop: 60
  }
});

export default App;
