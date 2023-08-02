import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileNav = ({ user }) => {
  return (
    <ScrollView style={styles.nav} horizontal={true}>
      <View style={[styles.navlist, styles.navlistactive]}>
        <Text style={[styles.navlistText, styles.activeText]}>Timeline</Text>
      </View>
      <View style={styles.navlist}>
        <Text style={styles.navlistText}>Group</Text>
      </View>
      <View style={styles.navlist}>
        <Text style={styles.navlistText}>Likes</Text>
      </View>
      <View style={[styles.navlist, styles.friends]}>
        <Text style={styles.navlistText}>Friends</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.navlistFriendsText}>
            {user?.friends?.length > 0 ? user?.friends?.length : 0}
          </Text>
        </View>
      </View>
      <View style={styles.navlist}>
        <Text style={styles.navlistText}>Photos</Text>
      </View>
      <View style={[styles.navlist, styles.last]}>
        <Text style={styles.navlistText}>Videos</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#2d2e2e",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  navlistText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600
  },
  navlist: {
    marginHorizontal: 10
  },
  activeText: {
    color: "green"
  },
  navlistactive: {
    borderBottomColor: "green",
    borderBottomWidth: 3
  },
  friends: {
    flexDirection: "row"
  },
  navlistFriendsText: {
    color: "#fff",
    marginLeft: 8,
    padding: 1,
    paddingHorizontal: 3,
    backgroundColor: "#797a7a",
    borderRadius: 3
  },
  last: {
    marginRight: 40
  }
});
