import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNav from "../../components/BottomNav";

const Chats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chats</Text>
      <BottomNav navigation={navigation} page={"Chats"} />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
