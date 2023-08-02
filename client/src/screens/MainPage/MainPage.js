import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../../components/MainPage/Header";
import Body from "../../components/MainPage/Body";
import BottomNav from "../../components/BottomNav";

const MainPage = ({ navigation, route}) => {
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Body navigation={navigation} />
      <BottomNav navigation={navigation} page={"MainPage"} />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
    backgroundColor: "#44f205",
  },
});
