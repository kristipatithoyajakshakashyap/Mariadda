import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../../components/BottomNav";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Footer from "../../components/Footer";
import { logoutAction } from "../../redux/actions/auth";

const NavProfileMenu = ({ navigation }) => {
  const userData = useSelector((state) => state.user.userData);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleLogout = async () => {
    try {
      dispatch(logoutAction());
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error clearing user data:", error);
    }
  };
  return (
    <View style={styles.container}>
      <BottomNav navigation={navigation} />
      <ScrollView>
        <Text style={styles.username}>{userData?.username}</Text>
        <View style={styles.details}>
          <View style={styles.detailsLeft}>
            <Image
              source={{ uri: userData?.picture }}
              style={styles.profilePic}
            />
            <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
              <Text style={styles.detailsLeftText}>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tokens}>
          <View style={styles.token}>
            <Ionicons name="ios-wallet" size={16} color="#fff" />
            <Text style={styles.tokenText}>₹100.00</Text>
          </View>
          <View style={styles.token}>
            <FontAwesome5 name="coins" size={16} color="#fff" />
            <Text style={styles.tokenText}>598</Text>
          </View>
          <View style={styles.token}>
            <FontAwesome name="hand-o-right" size={16} color="#fff" />
            <Text style={styles.tokenText}>Pokes</Text>
          </View>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="rocket-launch-outline"
            size={20}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Upgrade To Pro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome
            name="bullhorn"
            size={20}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Advertising</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="shield-check"
            size={20}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Privacy Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="settings"
            size={20}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>General Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome
            name="envelope"
            size={17}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Invite Your Friends</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <View style={styles.night}>
          <TouchableOpacity style={[styles.menuItem, styles.nightItem]}>
            <Ionicons
              name="moon"
              size={20}
              color="white"
              style={styles.menuIcon}
            />
            <Text style={styles.menuTitle}>Night Mode</Text>
          </TouchableOpacity>
          <CheckBox
            checked={isChecked}
            onPress={toggleCheckbox}
            checkedColor="#177409"
          />
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="message-text-lock-outline"
            size={18}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Chat lock on</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, styles.lastIcon]}
          onPress={handleLogout}
        >
          <MaterialIcons
            name="logout"
            size={20}
            color="white"
            style={styles.menuIcon}
          />
          <Text style={styles.menuTitle}>Log out</Text>
        </TouchableOpacity>
        <Footer />
        <View style={styles.bottom} />
      </ScrollView>
    </View>
  );
};

export default NavProfileMenu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
    backgroundColor: "#232324"
  },
  username: {
    color: "#fff",
    fontSize: 25,
    paddingVertical: 7,
    paddingHorizontal: 20,
    fontWeight: 600
  },
  details: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  detailsLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  detailsLeftText: {
    color: "#fff",
    marginLeft: 30,
    fontSize: 15
  },
  tokens: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row"
  },
  token: {
    flexDirection: "row",
    alignItems: "center",
    width: 85,
    marginHorizontal: 20,
    padding: 6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515251"
  },
  tokenText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
    fontWeight: 500
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#575958",
    marginVertical: 10,
    marginLeft: 20
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 10
  },
  menuIcon: {
    padding: 7,
    backgroundColor: "#515251",
    borderRadius: 50
  },
  menuTitle: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 20
  },
  night: {
    flexDirection: "row",
    alignItems: "center"
  },
  nightItem: {
    flex: 1
  },
  bottom: {
    marginBottom: 40
  },
  lastIcon: {
    marginBottom: 30
  }
});
