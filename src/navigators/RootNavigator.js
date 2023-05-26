import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homescreen from "../../src/screens/homescreen";
import Search from "../../src/screens/search";
import Profil from "../../src/screens/profil";
import Reels from "../../src/screens/reels";
import Shop from "../../src/screens/shop";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "bug";
          } else if (route.name === "Search") {
            iconName = "md-search-outline";
          } else if (route.name === "Reels") {
            iconName = "add-circle-outline";
          } else if (route.name === "Shop") {
            iconName = "color-palette-outline";
          } else if (route.name === "Profil") {
            iconName = "boat-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}