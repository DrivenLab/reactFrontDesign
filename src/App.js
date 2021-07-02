import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        filledRounded: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.500`,
            rounded: "full"
          };
        }
      },
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: "md"
      },
      defaultProps: {
        colorScheme: "red"
      }
    },
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }) => {
        return {
          color: colorMode === "dark" ? "red.300" : "blue.300",
          fontWeight: "normal"
        };
      }
    }
  }
});

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#000",
              shadowColor: "#000"
            },
            headerTintColor: "#FFF"
          }}
        >
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterPage"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
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
