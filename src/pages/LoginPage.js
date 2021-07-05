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
import Icon from "react-native-vector-icons/AntDesign";
import { color, textAlign } from "styled-system";
import Register from "./RegisterPage";
import Http from "../libs/http";
import ErrorMessage from "../components/includes/ErrorMessage";

/** Envía una solicitud de login a través de http y espera una respuesta. */
const sendLogin = async ({ phoneNumber }) => {
  // return await Http.post('url', { phoneNumber });
  return await new Promise((resolve, reject) => {
    console.log("INICIANDO SESIÓN...");
    //Enviar codigo de verificacion a la api megal para WHATSAPP
    setTimeout((_) => {
      resolve({ success: true });
    }, 1500);
  });
};

const Login = ({ navigation }) => {
  /** Número de celular ingresado por el usuario */
  const [phoneNumber, setPhoneNumber] = React.useState("");
  /** Estado de la aplicación (enviando solicitud de login) */
  const [sendingLogin, setSendingLogin] = React.useState(false);
  /** Verifica que el número de celular ingresado cumpla con los criterios */
  const [isValidPhoneNumber, setIsValidPhoneNumber] = React.useState(false);
  /** Mensaje de error ocurrido al intentar hacer login */
  const [loginError, setLoginError] = React.useState("");
  /** Cantidad de números necesarios para obtener un número de celular móvil */
  const [phoneNumberLenght] = React.useState(9);

  const [position, setPosition] = React.useState("auto");

  /** Acualizar la variable isValidPhoneNumber a medida que el usuario carga los datos */
  React.useEffect(
    (_) => {
      setIsValidPhoneNumber(phoneNumber.length === phoneNumberLenght); // TODO: 9??
    },
    [phoneNumber]
  );

  /** Maneja el evento ocurrido al presionar el botón de login */
  const handleSendLogin = async () => {
    if (sendingLogin) return;
    setLoginError("");
    if (isValidPhoneNumber) {
      setSendingLogin(true);
      const response = await sendLogin(phoneNumber);
      if (response.success) navigation.navigate("RegisterPage");
      else
        setLoginError("Error en la conexión, por favor vuelva a intentarlo.");
      setSendingLogin(false);
    } else {
      setLoginError("Ingrese su numero de celular para continuar");
    }
  };

  return (
    <View style={styles.container}>
      <FormControl>
        <Stack
          space={2}
          p={4}
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          top="-8%"
        >
          <Box
            width="50vw"
            height="50vw"
            borderRadius="100%"
            bgColor="#aaa"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="#fff" fontSize={30} fontWeight="bold">
              LOGO
            </Text>
          </Box>

          <Text fontSize={26} fontWeight="bold" textAlign="center">
            ¡Bienvenido/a a DrivenLab!
          </Text>

          {/* INPUT PHONE */}

          <FormControl.Label textAlign="center" maxWidth="80%">
            Por favor, ingresa tu número de celular para continuar.
          </FormControl.Label>

          <Input
            variant="rounded"
            maxLength={phoneNumberLenght}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            type="number"
            letterSpacing={2}
            placeholder="Ej: 094 123 456"
            size="lg"
            py={14}
            px={7}
            w="100%"
            h="53px"
            borderColor="#000"
            color="white"
            border={0}
            backgroundColor="#3c3c3c"
            _focus={{
              backgroundColor: "#121212"
            }}
          />

          {/* LOGIN BUTTON */}

          <Button
            w="100%"
            h="53px"
            bgColor={isValidPhoneNumber ? "#52AF32" : "#888"}
            borderRadius={50}
            onPress={handleSendLogin}
            isLoading={sendingLogin}
            isLoadingText="Enviando..."
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
              Enviar código a WhastApp
              {!sendingLogin && (
                <ArrowForwardIcon px={1} size={7} color="#fff" />
              )}
            </Box>
          </Button>

          {/* ERROR MESSAGE */}

          <ErrorMessage
            error={loginError}
            handleClose={(_) => setLoginError("")}
          />
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
