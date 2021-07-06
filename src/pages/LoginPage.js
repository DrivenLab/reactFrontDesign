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

import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { color, textAlign } from "styled-system";
import Register from "./RegisterPage";
import Http from "../libs/http";
import ErrorMessage from "../components/includes/ErrorMessage";
import BackWaves from "../components/includes/BackWaves";
import ValidationButton from "../components/includes/ValidationButton";
import { colors, textColors, bgColors } from "../res/colors";
import { shadow, inputStyle, flex } from "../res/styles";
import PhoneInput from "react-phone-input-2";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber
} from "react-phone-number-input";

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
  const [canSendCode, setCanSendCode] = React.useState(false);
  /** Mensaje de error ocurrido al intentar hacer login */
  const [loginError, setLoginError] = React.useState("");

  /** Acualizar la variable canSendCode a medida que el usuario carga los datos */
  React.useEffect(
    (_) => {
      setCanSendCode(!!phoneNumber && isValidPhoneNumber("+" + phoneNumber));
    },
    [phoneNumber]
  );

  /** Maneja el evento ocurrido al presionar el botón de login */
  const handleSendLogin = async () => {
    if (sendingLogin) return;
    setLoginError("");
    if (canSendCode) {
      setSendingLogin(true);
      const response = await sendLogin(phoneNumber);
      if (response.success) navigation.navigate("RegisterPage");
      else
        setLoginError("Error en la conexión, por favor vuelva a intentarlo.");
      setSendingLogin(false);
    } else {
      setLoginError(
        phoneNumber.length > 3
          ? "El número no es válido."
          : "Ingrese su numero de celular para continuar."
      );
    }
  };

  return (
    <View style={[styles.container, { position: "relative" }]}>
      <FormControl>
        <Stack
          space={0}
          p={2}
          w="100%"
          style={flex("column", "center")}
          position="relative"
          top="-8%"
        >
          {/* HEADER */}

          <Box
            maxWidth={200}
            minWidth={200}
            maxHeight={200}
            minHeight={200}
            borderRadius={100}
            bgColor="#aaa"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text style={textColors.white} fontSize={30} fontWeight="bold">
              Logo
            </Text>
          </Box>

          <Text fontSize={26} fontWeight="bold" textAlign="center">
            ¡Bienvenido/a a DrivenLab!
          </Text>

          {/* INPUT PHONE */}

          <Text>Tu número de celular</Text>

          <Stack space={6} style={flex("column", "center")}>
            <Box
              style={[
                inputStyle(false, 0, 0),
                {
                  position: "realtive",
                  left: -5,
                  transform: [{ scaleX: 0.96 }]
                }
              ]}
            >
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true
                }}
                masks={{ uy: ".. ... ...", py: "... ......" }}
                autoFocus={true}
                country="uy"
                countryCodeEditable={false}
                regions={"america"}
                placeholder="Número de telefono"
                value={phoneNumber}
                onChange={setPhoneNumber}
                containerStyle={{
                  width: "100%"
                }}
                inputStyle={{
                  ...inputStyle(),
                  paddingLeft: 60,
                  backgroundColor: "#eee",
                  color: "#444"
                }}
                buttonStyle={{
                  backgroundColor: "#fff",
                  borderLeft: 0,
                  borderTop: 0,
                  borderBottom: 0,
                  paddingRight: 12,
                  paddingLeft: 12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10
                }}
              />
            </Box>

            {/* LOGIN BUTTON */}

            <ValidationButton
              title="Enviar código a WhastApp"
              isValid={canSendCode}
              loading={sendingLogin}
              loadingMsg="Enviando..."
              onPress={handleSendLogin}
            />
          </Stack>

          {/* BOTTOM COLOR */}
        </Stack>
      </FormControl>

      {/* WAVES */}

      {BackWaves()}

      {/* ERROR MESSAGE */}

      <ErrorMessage error={loginError} handleClose={(_) => setLoginError("")} />
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
