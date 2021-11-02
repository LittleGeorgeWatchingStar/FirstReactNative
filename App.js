//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {/* <StatusBar style="auto" /> */}
      <TouchableOpacity onPress={() => console.log("image taped")}>
        <Image source={require("./assets/favicon.png")} />
        {/* <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          title="Click Me"
          onPress={() => Alert.alert("My title", "Button clicked", [
            {text: "Yes"},
            {text: "No"}
          ])}

          // Alert.prompt("My title", "Button Clicked", input => console.log(input))
          
        ></Button>
      </TouchableOpacity>
    </View>
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
