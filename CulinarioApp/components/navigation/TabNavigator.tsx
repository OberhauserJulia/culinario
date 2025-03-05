import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../../screens/HomeScreen";
import HomeStackNavigator from "./StackNavigator";
import AddRecipeScreen from "../../screens/AddRecipeScreen";
import CustomTabBar from "./CustomTabBar";
import ShoppingListScreen from "../../screens/ShoppingListScreen";

export type TabParamList = {
  Home: undefined;
  AddRecipe: undefined;
  List: undefined;
  ShoppingList: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{ title: "Home" }} />
        <Tab.Screen name="AddRecipe" component={AddRecipeScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;