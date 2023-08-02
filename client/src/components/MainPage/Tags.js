import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tags = () => {
  return (
    <ScrollView horizontal={true} style={styles.tags}>
      <TouchableOpacity style={[styles.tag, styles.activeTag]}>
        <Ionicons
          name="ios-receipt-outline"
          size={20}
          color="white"
          style={styles.activeBlobIcon}
        />
        <Text style={[styles.tagText, styles.activeTagText]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <MaterialCommunityIcons name="text" size={20} color="white" />
        <Text style={styles.tagText}>Text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <AntDesign name="camerao" size={20} color="white" />
        <Text style={styles.tagText}>Photos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <AntDesign name="videocamera" size={20} color="white" />
        <Text style={styles.tagText}>Videos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <Feather name="music" size={20} color="white" />
        <Text style={styles.tagText}>Sound</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 15,
    marginHorizontal: 8,
    backgroundColor: "#2d2e2e",
  },
  tagText: {
    fontSize: 17,
    color: "#fff",
    paddingHorizontal: 10,
  },
  tags: {
    marginHorizontal: 10,
    marginBottom: 40,
  },
  activeTag: {
    backgroundColor: "rgba(0, 255, 0, 0.3)",
  },
  activeTagText: {
    color: "#19c202",
  },
  activeBlobIcon: {
    color: "#19c202",
  },
});
