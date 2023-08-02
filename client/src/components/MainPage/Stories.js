import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import user from "../../../assets/images/user.jpeg";
import profile1 from "../../../assets/stories/profile1.jpg";
import profile2 from "../../../assets/stories/profile2.jpg";
import profile3 from "../../../assets/stories/profile3.png";
import { AntDesign } from "@expo/vector-icons";

const Stories = ({user}) => {
  return (
    <ScrollView horizontal={true} style={styles.stories}>
      <View style={styles.createStoryCard}>
        <Image
          source={{ uri: user?.picture }}
          style={styles.createStoryImg}
        />
        <TouchableOpacity style={styles.plusStory}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.storyCreateText}>Create new story</Text>
      </View>
      <View style={styles.createStoryCard}>
        <Image source={profile1} style={styles.createStoryImg} />
        <Text style={styles.storyText}>Elon</Text>
      </View>
      <View style={styles.createStoryCard}>
        <Image source={profile2} style={styles.createStoryImg} />
        <Text style={styles.storyText}>Kevin</Text>
      </View>
      <View style={styles.createStoryCard}>
        <Image source={profile3} style={styles.createStoryImg} />
        <Text style={styles.storyText}>John</Text>
      </View>
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    position: "relative",
    flexDirection: "row",
    padding: 6,
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
  },
  createStoryCard: {
    position: "relative",
    height: 250,
    width: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 8,
  },
  createStoryImg: {
    position: "absolute",
    height: "75%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.8,
    borderRadius: 10,
  },
  plusStory: {
    position: "absolute",
    left: "25%",
    top: "63%",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 4,
  },
  storyCreateText: {
    color: "white",
    position: "absolute",
    bottom: 20,
    left: 0,
    fontSize: 15,
    fontWeight: 600,
  },
  storyText: {
    color: "white",
    position: "absolute",
    bottom: 20,
    left: "35%",
    fontSize: 15,
    fontWeight: 600,
  },
});
