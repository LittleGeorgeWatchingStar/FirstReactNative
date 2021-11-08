import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import styled from "styled-components";
import { VStack } from "native-base";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    // blurRadius={1}
    <Background source={require("../assets/background.jpg")}>
      <LogoContainer flex={1}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Selenaston V1.1</Text>
      </LogoContainer>

      {/* <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View> */}
      <AppButton
        style={styles.loginButton}
        title="Login"
        onPress={() => console.log("Tapped login")}
      ></AppButton>
      <AppButton
        style={styles.registerButton}
        title="Register"
        color="secondary"
        onPress={() => console.log("Tapped reg")}
      ></AppButton>
    </Background>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: "#4ecdc4",
  },
});

const Background = styled(ImageBackground)({
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
});

const LogoContainer = styled(VStack)({
  top: 70,
  alignItems: "center",
});

export default WelcomeScreen;
