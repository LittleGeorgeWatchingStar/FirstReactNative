import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"
import AppText from "../components/AppText";
import styled from "styled-components";
import { VStack } from "native-base";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <Background
      source={require("../assets/background.jpg")}
    >
      <LogoContainer flex={1} >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Selenaston V1.1</Text>
      </LogoContainer>

      {/* <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View> */}
      <AppButton style={styles.loginButton} title="Login"></AppButton>
      <AppButton style={styles.registerButton} title="Register"></AppButton>
    </Background>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
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
    backgroundColor: "#4ecdc4",
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
