import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import welcome from "../../../../assets/images/welcome.jpg";
import Footer from "../../../components/Footer";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/actions/auth";
import axios from "axios";
import { APP_BACKEND_URL } from "@env";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Please enter username and password");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(`${APP_BACKEND_URL}/login`, {
          username,
          password
        });
        setLoading(false);
        dispatch(loginAction(response.data)); // Save the user data to AsyncStorage
        navigation.navigate("MainPage");
      } catch (error) {
        setLoading(false);
        alert("Login failed. Please check the credentials");
        console.log("Login error", error);
      }
    }
  };
  // console.log(APP_BACKEND_URL);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={welcome} style={styles.bgImg}>
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100%" }}>
          <View style={styles.loginHeader}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://www.mariadda.com/themes/wondertag/img/logo.png",
              }}
            />
            <Text
              style={styles.headerbtn}
              onPress={() => navigation.navigate("MainPage")}
            >
              Register
            </Text>
          </View>
          <View style={styles.headerBody}>
            <Text style={styles.body1}>WELCOME TO MARIADDA!</Text>
            <Text style={styles.body2}>Connect with your</Text>
            <Text style={styles.body2}>family and friends and</Text>
            <Text style={styles.body2}>Share your moments</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.credentialBox}>
        <TextInput
          placeholder="Username"
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setPassword(text)}
        />
        <AntDesign
          name="questioncircle"
          size={20}
          color="lightgray"
          style={styles.questionmark}
        />
        <Text style={styles.formbtn} onPress={() => handleLogin()}>
          Login
        </Text>
      </View>
      <View style={styles.bodyPoints}>
        <View style={styles.bodyPoint}>
          <AntDesign
            name="checkcircleo"
            size={18}
            color="#04e00f"
            style={styles.check}
          />
          <View style={styles.bodyPointText}>
            <Text style={styles.bodyPointTextUp}>SHARE</Text>
            <Text style={styles.bodyPointTextDown}>
              Share what's new and life moments with your friends
            </Text>
          </View>
        </View>
        <View style={styles.bodyPoint}>
          <AntDesign
            name="checkcircleo"
            size={18}
            color="#04e00f"
            style={styles.check}
          />
          <View style={styles.bodyPointText}>
            <Text style={styles.bodyPointTextUp}>DISCOVER</Text>
            <Text style={styles.bodyPointTextDown}>
              Discover new people, create new connections and make new friends
            </Text>
          </View>
        </View>
        <View style={styles.bodyPoint}>
          <AntDesign
            name="checkcircleo"
            size={18}
            color="#04e00f"
            style={styles.check}
          />
          <View style={styles.bodyPointText}>
            <Text style={styles.bodyPointTextUp}>100% PRIVACY</Text>
            <Text style={styles.bodyPointTextDown}>
              You have full control over your personal information that you
              share.
            </Text>
          </View>
        </View>
        <View style={styles.bodyPoint}>
          <AntDesign
            name="checkcircleo"
            size={18}
            color="#04e00f"
            style={styles.check}
          />
          <View style={styles.bodyPointText}>
            <Text style={styles.bodyPointTextUp}>MORE SECURITY</Text>
            <Text style={styles.bodyPointTextDown}>
              Your account is fully secure. We never share your data with third
              party..
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.bottomBoxText}>Discover Mariadda</Text>
        <View style={styles.bottomBoxContainer}>
          <View style={styles.bottomBoxContainerElements}>
            <MaterialIcons
              name="explore"
              size={30}
              color="white"
              style={styles.exploreIcon}
            />
            <Text style={styles.elementText}>Explore</Text>
          </View>
          <View style={styles.bottomBoxContainerElements}>
            <Ionicons
              name="ios-receipt-outline"
              size={30}
              color="white"
              style={styles.BlobIcon}
            />
            <Text style={styles.elementText}>Blog</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    backgroundColor: "#1e1f1e",
  },
  logo: {
    width: 200,
    height: 58,
    resizeMode: "contain",
  },
  loginHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerbtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#177409",
    color: "#fff",
    fontWeight: 900,
  },
  headerBody: {
    alignItems: "center",
    marginTop: 100,
  },
  body1: {
    fontWeight: "bold",
    color: "#f0f0f0",
    fontSize: 20,
  },
  body2: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 35,
  },
  bgImg: {
    height: 400,
    opacity: 0.8,
  },
  formInput: {
    width: "100%",
    backgroundColor: "#474746",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    alignItems: "center",
    color: "white",
  },
  formbtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#177409",
    color: "#fff",
    fontWeight: 900,
    width: "100%",
    paddingLeft: 100,
    marginTop: 10,
    fontSize: 20,
  },
  credentialBox: {
    alignItems: "center",
    backgroundColor: "#353635",
    width: "80%",
    borderWidth: 1,
    marginHorizontal: 40,
    padding: 30,
    marginTop: -60,
    borderRadius: 20,
    position: "relative",
  },
  questionmark: {
    position: "absolute",
    top: "63%",
    right: "18%",
  },
  bodyPoints: {
    width: "95%",
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyPoint: {
    flexDirection: "row",
    marginVertical: 10,
  },
  bodyPointText: {
    width: "85%",
  },
  check: {
    marginLeft: 20,
    marginRight: 15,
    marginTop: 4,
  },
  bodyPointTextUp: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 600,
  },
  bodyPointTextDown: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 600,
    lineHeight: 25,
  },
  bottomBox: {
    alignItems: "center",
    backgroundColor: "#353635",
    width: "90%",
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 50,
    padding: 30,
    borderRadius: 20,
    position: "relative",
  },
  bottomBoxText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 600,
  },
  bottomBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomBoxContainerElements: {
    marginHorizontal: 20,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  elementText: {
    color: "#fff",
    fontSize: 18,
  },
  exploreIcon: {
    padding: 25,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#edc305",
  },
  BlobIcon: {
    padding: 25,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#0575ed",
  },
});
