import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import RecipeScreen from "../../screens/RecipeScreen";
import CookingModeScreen from "../../screens/CookingModeScreen";
import SettingsScreen from "../../screens/SettingsScreen";

export type HomeStackParamList = {
  Home: undefined;
  Recipe: { recipeId: string };
  CookingMode: { recipeId: string };
  Settings: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="CookingMode" component={CookingModeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;