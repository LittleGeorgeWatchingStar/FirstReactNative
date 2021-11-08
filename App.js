import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { NativeBaseProvider } from 'native-base';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <ListingDetailsScreen /> */}
      {/* <ListingsScreen /> */}
      <MessagesScreen />
    </NativeBaseProvider>
  );
}
