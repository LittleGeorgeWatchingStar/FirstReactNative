//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  View,
  Image,
  Button,
  Platform,
  StatusBar
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style ={{
        backgroundColor: 'dodgerblue',
        width:'50%',
        height: landscape ? '100%' : '30%',
      }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
  },
});
