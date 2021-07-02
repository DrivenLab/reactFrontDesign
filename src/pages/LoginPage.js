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
  ArrowForwardIcon
} from "native-base";

import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { color, textAlign } from "styled-system";
import Register from "./RegisterPage";

import Http from "../libs/http";

const sendLogin = async ({ phoneNumber }) => {
  // return await Http.post('url', { phoneNumber });
  await new Promise((resolve, reject) => {
    //Enviar codigo de verificacion a la api megal para WHATSAPP
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
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [sendingLogin, setSendingLogin] = React.useState(false);
  const [loginError, setLoginError] = React.useState("");
  /*
    useState // Importante
    useEffect // Importante
    useContext // Importante <<<<<

    useRef
  */

  const validateLogin = () => {
    return phoneNumber.length > 0;
  };

  const handleSendLogin = async () => {
    setLoginError("");
    if (validateLogin()) {
      setSendingLogin(true);
      const response = await sendLogin(phoneNumber);
      // TODO: verificar response
      setSendingLogin(false);
      navigation.navigate("RegisterPage");
    } else {
      setLoginError("Ingrese su numero de celular para continuar");
    }
  };

  return (
    <View style={styles.container}>
      <FormControl>
        <Stack
          space={4}
          p={4}
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize={26} fontWeight="bold">
            ¡Bienvenido a ---!
          </Text>

          {/* INPUT PHONE */}

          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <FormControl.Label>
              Ingresa tu número de celular para continuar
            </FormControl.Label>

            <Input
              variant="rounded"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              type="number"
              placeholder="Ej: 094 123 456"
              size="lg"
              py={14}
              px={7}
              w="100%"
              h="53px"
              mt={2}
              borderColor="#000"
              color="white"
              border={0}
              backgroundColor="#3c3c3c"
              _focus={{
                backgroundColor: "#121212"
              }}
            />
          </Box>

          {/* LOGIN BUTTON */}

          <Button
            square
            block
            w="100%"
            h="53px"
            bgColor="#52AF32"
            borderRadius={50}
            onPress={handleSendLogin}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white" fontWeight="bold" fontSize={18}>
                {sendingLogin ? "Verificando..." : "Enviar código por WhastApp"}
              </Text>
              {!sendingLogin && <ArrowForwardIcon px={2} color="#fff" />}
            </Box>
          </Button>

          {/* ERROR MESSAGE */}

          <Text color="red">{loginError}</Text>
        </Stack>
      </FormControl>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: "#3C3C3C"
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
    flex: 1,
    backgroundColor: "#FFF"
  },
  register: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Login;
