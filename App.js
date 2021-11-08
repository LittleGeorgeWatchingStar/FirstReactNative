import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { NativeBaseProvider } from 'native-base';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ListingDetailsScreen />
    </NativeBaseProvider>
  );
}
