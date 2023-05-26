import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Instagram from "../../assets/Instagram.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={Instagram} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.unreadBadge}></View>
          <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendIcon}>
          <Feather name="send" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 140,
    height: 60,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  sendIcon: {
    marginLeft: 8,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 24,
    bottom: 14,
    width: 10,
    height: 10,
    borderRadius: 100,
    zIndex: 100,
  },
});
