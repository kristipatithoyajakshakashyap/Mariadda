import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const BottomNav = ({ navigation, page }) => {
  const userData = useSelector((state) => state.user.userData);
  //   console.log(userData.picture);
  return (
    <View    iew style={styles.container}>
      {page === "MainPage" ? (
        <Entypo
          name="home"
          size={24}
          color="green"
          onPress={() => navigation.navigate("MainPage")}
        />
      ) : (
        <Entypo
          name="home"
          size={24}
          color="white"
          onPress={() => navigation.navigate("MainPage")}
        />
      )}
      {page === "Requests" ? (
        <Ionicons
          name="people-outline"
          size={24}
          color="green"
          onPress={() => navigation.navigate("Requests")}
        />
      ) : (
        <Ionicons
          name="people-outline"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Requests")}
        />
      )}
      {page === "Chats" ? (
        <Ionicons
          name="chatbubbles-outline"
          size={24}
          color="green"
          onPress={() => navigation.navigate("ChatList")}
        />
      ) : (
        <Ionicons
          name="chatbubbles-outline"
          size={24}
          color="white"
          onPress={() => navigation.navigate("ChatList")}
        />
      )}
      {page === "Notifications" ? (
        <Ionicons
          name="notifications-sharp"
          size={24}
          color="green"
          onPress={() => navigation.navigate("Notifications")}
        />
      ) : (
        <Ionicons
          name="notifications-sharp"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Notifications")}
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate("NavProfileMenu")}>
        <Image source={{ uri: userData?.picture }} style={styles.picture} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2d2e2e",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    borderTopWidth: 2,
    borderColor: "#3a3b3a",
    paddingVertical: 10,
  },
  picture: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
