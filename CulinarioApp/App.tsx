import React from "react";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
//import TabNavigator from "./components/navigation/TabNavigator";
import TabNavigator from "./components/navigation/CombinedNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "./global.css"

import AddRecipeScreen from "./screens/AddRecipeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratBold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "RobotoBold": require("./assets/fonts/Roboto-Bold.ttf"),
    "RobotoMedium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
    return null;
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// import React from 'react';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import AddRecipeScreen from "./screens/AddRecipeScreen";
// import { IngredientProvider } from './context/IngredientContext';  // Importiere den IngredientProvider
// import { RecipeProvider } from './context/RecipeContext';  // Wenn du auch den RecipeContext verwendest

// // Deine Firebase-Konfiguration
// const firebaseConfig = {
//   apiKey: "AIzaSyA-NHYc5g6Q5PY-3wqbrP6F606A7H4NYNg",
//   authDomain: "culinario-a1cd8.firebaseapp.com",
//   projectId: "culinario-a1cd8",
//   storageBucket: "culinario-a1cd8.firebasestorage.app",
//   messagingSenderId: "468145572327",
//   appId: "1:468145572327:web:fc1b14f95e02b2d4ad9542",
//   measurementId: "G-ZDV78J99PY"
// };

// // Firebase initialisieren
// initializeApp(firebaseConfig);
// const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(db);

// export default function App() {
//   return (
//     <IngredientProvider>  {/* IngredientContext Provider einfügen */}
//       <RecipeProvider>     {/* Optional, wenn du den RecipeContext auch verwendest */}
//         <AddRecipeScreen />
//       </RecipeProvider>
//     </IngredientProvider>
//   );
// }