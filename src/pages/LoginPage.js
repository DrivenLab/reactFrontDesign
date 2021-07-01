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

import Icon from "react-native-vector-icons/MaterialIcons";
import { color } from "styled-system";
import Register from "./RegisterPage";

import Http from "../libs/http";

const sendLogin = async ({ email, password }) => {
  // return await Http.post('url', { email, password });
  await new Promise((resolve, reject) => {
    setTimeout((_) => {
      console.log("INICIANDO SESIÓN...");
      resolve({
        token: "i2o3hio1h4oi23h4o23",
        user: {
          username: "usuario"
        }
      });
    }, 1500);
  });
};

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [sendingLogin, setSendingLogin] = React.useState(false);
  const [loginError, setLoginError] = React.useState("");
  /*
    useState // Importante
    useEffect // Importante
    useContext // Importante <<<<<

    useRef
  */

  const validateLogin = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSendLogin = async () => {
    setLoginError("");
    if (validateLogin()) {
      setSendingLogin(true);
      await sendLogin(email, password);
      setSendingLogin(false);
    } else {
      setLoginError("Ingrese su nombre de usuario y contraseña");
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <FormControl>
          <Stack space={4} p={4} w="100%">
            <FormControl.Label>MEGAL</FormControl.Label>

            {/* INPUT EMAIL */}

            <Box>
              <FormControl.Label>Correo electrónico</FormControl.Label>
              <Input
                InputLeftElement={<Icon name="person" size={30} color="#000" />}
                variant="filled"
                value={email}
                onChangeText={setEmail}
                type="email"
                placeholder="exemplo@megal.com"
              />
            </Box>

            {/* INPUT PASSWORD */}

            <Box>
              <FormControl.Label style={{ marginTop: 10 }}>
                Contraseña
              </FormControl.Label>
              <Input
                InputLeftElement={
                  <Icon
                    name="key"
                    style={{ padding: 5 }}
                    size={30}
                    color="#000"
                  />
                }
                InputRightElement={
                  <Icon
                    name="view"
                    style={{ padding: 5 }}
                    size={30}
                    color="#000"
                  />
                }
                variant="filled"
                value={password}
                onChangeText={setPassword}
                type="password"
                placeholder="**********"
              />
            </Box>

            {/* LOGIN BUTTON */}

            <Button
              square
              block
              style={{ marginTop: 10 }}
              onPress={handleSendLogin}
            >
              <Text style={{ color: "#FFF" }}>
                {sendingLogin ? "INICIANDO..." : "INICIAR SESIÓN"}
              </Text>
            </Button>

            {/* ERROR MESSAGE */}

            <Text style={{ color: "#F00" }}>{loginError}</Text>
          </Stack>
        </FormControl>

        <Text
          style={styles.register}
          onPress={() => navigation.navigate("RegisterPage")}
        >
          REGISTRARSE
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: "#000"
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: "#3a4049"
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  register: {
    textAlign: "center",
    color: "#000",
    marginTop: 80,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase"
  }
});

export default Login;
