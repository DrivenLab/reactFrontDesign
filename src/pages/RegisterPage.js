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
import ValidationButton from "../components/includes/ValidationButton";
import ErrorMessage from "../components/includes/ErrorMessage";
import { StyleSheet, View, TextInput } from "react-native";
import Http from "../libs/http";
import { colors, textColors, bgColors } from "../res/colors";
import { shadow, inputStyle } from "../res/styles";
import BackWaves from "../components/includes/BackWaves";

/** Envía una solicitud de login a través de http y espera una respuesta. */
const sendCodeVerification = async ({ code }) => {
  // return await Http.post('url', { code });
  return await new Promise((resolve, reject) => {
    // Enviar codigo de verificacion a la api megal para WHATSAPP
    setTimeout((_) => {
      console.log("VERIFICANDO CÓDIGO DE VERIFICACIÓN...");
      resolve({
        success: false,
        token: "i2o3hio1h4oi23h4o23",
        user: {
          username: "usuario"
        }
      });
    }, 1500);
  });
};

const Register = ({ navigation }) => {
  /** Código de seguridad ingresado por el usuario */
  const [code, setCode] = React.useState("");
  /** Verifica que el código de seguridad ingresado cumpla con los criterios */
  const [isValidCode, setIsValidCode] = React.useState(false);
  /** Estado de la aplicación (verificando código de seguridad) */
  const [verifying, setVerifying] = React.useState(false);
  /** Cantidad de dígitos esperados del código de segutidad */
  const [codeLenght] = React.useState(4);
  /** Mensaje de error ocurrido al verificar código */
  const [verifyError, setVerifyError] = React.useState("");
  /** Contador (en segundos) de la cantidad de tiempo en espera antes de poder volver a enviar el código */
  const [resendTimer, setResendTimer] = React.useState(60);
  const [resendTimerId, setResendTimerId] = React.useState(null);
  const [canResendCode, setCanResendCode] = React.useState(false);

  React.useEffect(
    (_) => {
      setIsValidCode(code.length === codeLenght);
    },
    [code]
  );

  /** Actualiza el timer para permitir reenvío de código de seguridad */
  React.useEffect(
    (_) => {
      if (!resendTimerId) {
        setResendTimerId(
          setInterval((_) => {
            setResendTimer(resendTimer - 1);
          }, 1000)
        );
      }
      if (resendTimer <= 0) {
        clearInterval(resendTimerId);
        setCanResendCode(true);
        // setResendTimerId(null);
      } else setCanResendCode(false);
      return (_) => {
        if (resendTimerId) {
          clearTimeout(resendTimerId);
          setResendTimerId(null);
        }
      };
    },
    [resendTimerId, resendTimer]
  );

  /** Maneja el evento ocurrido al presionar el botón de verificación de código */
  const handleVerifyCode = async () => {
    if (verifying) return;
    setVerifyError("");
    if (isValidCode) {
      setVerifying(true);
      // TODO: envair solicitud
      const response = await sendCodeVerification(code);
      if (response.success) {
        navigation.navigate("LoginPage");
        setCode("");
      } else {
        navigation.navigate("HomePage");
      }
      setVerifying(false);
    } else {
      setVerifyError(
        "Ingrese los 4 dígitos de su código de seguridad para continuar"
      );
    }
  };

  return (
    <View style={styles.centerContainer}>
      <FormControl>
        <Stack
          space={2}
          w="100%"
          p={4}
          style={styles.centerContainer}
          position="relative"
          top="-4%"
        >
          <Box
            width="25vw"
            height="25vw"
            borderRadius="100%"
            bgColor="#aaa"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="#fff" fontSize={20} fontWeight="bold">
              LOGO
            </Text>
          </Box>

          <Text maxWidth="85%" textAlign="center" color="#444">
            Ingrese el código de {codeLenght} dígitos una vez que lo haya
            recibido a través de WhastApp.
          </Text>

          {/* Code input */}

          <TextInput
            maxLength={codeLenght}
            value={code}
            onChangeText={setCode}
            type="number"
            placeholder="****"
            style={inputStyle(true, 10)}
          />

          {/* Confirm button */}

          <ValidationButton
            title="Enviar código a WhastApp"
            isValid={isValidCode}
            loading={verifying}
            loadingMsg="Enviando..."
            onPress={handleVerifyCode}
          />

          {/* Error message */}

          <ErrorMessage
            error={verifyError}
            handleClose={(_) => {
              setVerifyError("");
            }}
          />

          {/* Change phone name */}

          <Stack space={2} bgColor="#eee" borderRadius={10} p={4} width="100%">
            <Box display="flex" flexDirection="row">
              <Text>Enviado al </Text>
              <Text fontWeight="bold">094 212321</Text>
            </Box>
            <Box display="flex" flexDirection="row">
              <Button
                p={0}
                bgColor="transparent"
                onPress={(_) => {
                  navigation.navigate("LoginPage");
                }}
                _text={{
                  color: "#44f",
                  fontWeight: "bold",
                  width: "100%"
                }}
              >
                Cambiar número de celular
              </Button>
            </Box>
          </Stack>

          {/* Send code again */}

          <Stack space={2} bgColor="#eee" borderRadius={10} p={4}>
            <Text fontSize="19px" color="#000" textDecoration="underline">
              Tenga en cuenta que:
            </Text>
            <Text>
              El código verificador solo será válido durante 10 minutos.
            </Text>
            <Box display="flex" flexDirection="row">
              <Button p={0} bgColor="transparent">
                <Text
                  color={canResendCode ? "#44f" : "#555"}
                  fontWeight="bold"
                  width="100%"
                >
                  Volver a enviar código{" "}
                  {canResendCode ? "" : `(${resendTimer})`}
                </Text>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </FormControl>
      {/* WAVES */}

      {BackWaves()}
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Register;
