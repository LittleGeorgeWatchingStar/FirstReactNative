import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from "../config/colors";

import AppText from "../components/AppText";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" style={styles.closeIconImage} size={32}></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" style={styles.closeIconImage} size={32}></MaterialCommunityIcons>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  closeIconImage: {
    color: colors.white,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
