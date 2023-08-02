import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons
} from "@expo/vector-icons";
const UserDetails = ({ user }) => {
  console.log(user)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month}-${year}`;
  };
  const joinDate = formatDate(user?.createdAt);
  const birthDate = new Date(user?.dob);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return (
    <View style={styles.userDetails}>
      <TextInput
        placeholder="Search a Post"
        style={styles.formInput}
        placeholderTextColor="lightgray"
        fontSize={16}
      />
      <View style={styles.userDetailsList}>
        <Feather name="eye" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>Superactive</Text>
      </View>
      <View style={styles.userDetailsList}>
        <Feather name="users" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>
          {user?.friends?.length > 0 ? user?.friends?.length : 0} friends
        </Text>
      </View>
      <View style={styles.userDetailsList}>
        <FontAwesome name="file-text-o" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>
          {user?.posts?.length} posts
        </Text>
      </View>
      <View style={styles.userDetailsList}>
        <Feather name="smile" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>{user?.gender}</Text>
      </View>
      <View style={styles.userDetailsList}>
        <MaterialCommunityIcons
          name="cake-variant-outline"
          size={20}
          color="#b5b5b5"
        />
        <Text style={styles.userDetailsListText}>
          {Math.floor(ageInYears)} years old
        </Text>
      </View>
      <View style={styles.userDetailsList}>
        <Entypo name="location-pin" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>Lives in Hyderabad</Text>
      </View>
      <View style={styles.userDetailsList}>
        <MaterialIcons name="date-range" size={20} color="#b5b5b5" />
        <Text style={styles.userDetailsListText}>Joined in {joinDate}</Text>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  userDetails: {
    marginVertical: 30,
    backgroundColor: "#2d2e2e",
    paddingLeft: 20,
    paddingBottom: 10
  },
  formInput: {
    width: "90%",
    backgroundColor: "#474746",
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 18,
    alignItems: "center",
    color: "white",
    marginLeft: 10,
    marginTop: 20
  },
  userDetailsList: {
    flexDirection: "row",
    marginLeft: 15,
    marginVertical: 8,
    alignItems: "center"
  },
  userDetailsListText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 600
  },
  online: {
    color: "#03fc0f"
  }
});
