import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigationState } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { ShoppingCart, House, Plus } from "lucide-react-native";

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  // Prüft, ob der aktuelle Screen "Recipe" oder "CookingMod" ist
  const isRecipeOrCookingModScreen = useNavigationState((navState) => {
    if (!navState) return false; // Falls keine Navigation existiert, false zurückgeben

    const currentRoute = navState.routes[navState.index]; // Aktueller Tab
    const nestedRoute = currentRoute?.state?.routes?.[currentRoute.state.index]; // Aktueller Screen im Stack

    return nestedRoute?.name === "Recipe" || nestedRoute?.name === "CookingMode";
  });

  // Falls RecipeScreen oder CookingModeScreen aktiv ist, die CustomTabBar ausblenden
  if (isRecipeOrCookingModScreen) {
    return null;
  }

  return (
    <View className="absolute bottom-0 left-0 right-0 h-[60px] border-t-2 border-lightbackground bg-darkbackground flex-row justify-around items-center">
      <Svg width={90} height={60} viewBox="0 0 90 60" style={styles.svgStyle}>
        <Path d="M0 0 H90 V60 H0 V20 C20 50 70 50 90 20 V0 Z" fill="#161616" />
      </Svg>

      <View className="flex-row flex-1 justify-around items-center">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              className="flex-1 items-center justify-center"
            >
              {route.name === "Home" && (
                <House size={28} color={isFocused ? "#66A182" : "gray"} />
              )}
              {route.name === "ShoppingList" && (
                <ShoppingCart size={28} color={isFocused ? "#66A182" : "gray"} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        className="absolute top-[-25] left-1/2 ml-[-30] w-[60] h-[60] rounded-[30] bg-primary items-center justify-center"
        onPress={() => navigation.navigate("AddRecipe")}
      >
        <Plus size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  svgStyle: {
    position: "absolute",
    top: -20,
    left: "50%",
    marginLeft: -45,
  },
});

export default CustomTabBar;