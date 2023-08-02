import { StyleSheet, TouchabloeOpacity, Text, View } from "react-native";
import React from "react";
import mariaddalogo from "../../../assets/images/mariaddalogo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <MaterialIcons name="menu" size={30} color="white" />
        <Text
          style={styles.icon}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Image source={mariaddalogo} style={styles.logo} />
        </Text>
      </View>
      <View style={styles.headerRight}>
        <MaterialIcons name="search" size={30} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#2d2e2e"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100
  },
  icon: {
    padding: 5,
    fontSize: 52
  }
});
