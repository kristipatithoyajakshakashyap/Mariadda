import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import BottomNav from "../../components/BottomNav";
import { Ionicons } from "@expo/vector-icons";

const Notifications = ({ navigation }) => {
  const [tag, setTag] = useState("notifications");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <Text style={styles.notificationHeader}>Notification</Text>
        <View style={styles.notificationTags}>
          {tag === "activity" ? (
            <TouchableOpacity
              style={[styles.notificationTag, styles.activity]}
              onPress={() => {
                setTag("activity");
              }}
            >
              <Text style={styles.notificationTagText}>Activites</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.notificationTag}
              onPress={() => {
                setTag("activity");
              }}
            >
              <Text style={styles.notificationTagText}>Activites</Text>
            </TouchableOpacity>
          )}
          {tag === "notifications" ? (
            <TouchableOpacity
              style={[styles.notificationTag, styles.notification]}
              onPress={() => {
                setTag("notifications");
              }}
            >
              <Text
                style={styles.notificationTagText}
                onPress={() => {
                  setTag("notifications");
                }}
              >
                Notifications
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.notificationTag}
              onPress={() => {
                setTag("notifications");
              }}
            >
              <Text style={styles.notificationTagText}>Notifications</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} page={"Notifications"} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#44f205",
    width: "100%",
    height: "100%"
  },
  body: {
    width: "100%",
    height: "97%",
    marginTop: 30,
    backgroundColor: "#2d2e2e"
  },
  notificationHeader: {
    fontSize: 25,
    fontWeight: 600,
    color: "white",
    margin: 10
  },
  notificationTags: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    marginLeft: 75,
    marginVertical: 20
  },
  notificationTag: {
    paddingHorizontal: 13,
    paddingVertical: 3,
    borderRadius: 50
  },
  notificationTagText: {
    color: "#fff",
    fontSize: 17
  },
  activity: {
    backgroundColor: "#000"
  },
  notification: {
    backgroundColor: "#000"
  },
});
