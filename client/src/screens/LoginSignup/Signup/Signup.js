import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Footer from "../../../components/Footer";
import { APP_BACKEND_URL } from "@env";
import axios from "axios";

const Signup = ({ navigation }) => {
  const [gender, setGender] = useState(""); // State to store the selected gender
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleSignup = async () => {
    if (
      username == "" ||
      password == "" ||
      confirmPassword == "" ||
      gender == "" ||
      email == ""
    ) {
      alert("Please enter all details");
    }
    if (password !== confirmPassword) {
      alert("passwords do not match");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(`${APP_BACKEND_URL}/register`, {
          username,
          email,
          password,
          gender,
        });
        setLoading(false);
        navigation.navigate("Login");
      } catch (error) {
        setLoading(false);
        alert("Lognin failed. Please the credentials");
        console.log("login error", error);
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginHeader}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://www.mariadda.com/themes/wondertag/img/logo.png",
          }}
        />
        <Text
          style={styles.headerbtn}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
      <View style={styles.credentialBox}>
        <Text style={styles.signupText}>Sign up</Text>
        <TextInput
          placeholder="Username"
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="E-mail address"
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.formInput}
          placeholderTextColor="lightgray"
          fontSize={16}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            prompt="Gender"
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
        <View style={styles.tc}>
          <CheckBox
            checked={isChecked}
            onPress={toggleCheckbox}
            checkedColor="#177409"
          />
          <Text style={styles.tcText}>
            By creating your account, you agree to our{" "}
            <Text style={styles.link}>Terms of User </Text> &
            <Text style={styles.link}> Privacy Policy</Text>{" "}
          </Text>
        </View>
        <TouchableOpacity disabled={!isChecked}>
          <Text
            style={isChecked ? styles.formbtn : styles.formbtndisable}
            onPress={() => handleSignup()}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.redirect}>
        <Text style={styles.redirectText}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Login
          </Text>{" "}
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Signup;

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
  formInput: {
    width: "100%",
    backgroundColor: "#474746",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    alignItems: "center",
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  formbtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#44f205",
    color: "#fff",
    fontWeight: 900,
    width: "100%",
    paddingLeft: 120,
    marginTop: 10,
    fontSize: 20,
  },
  formbtndisable: {
    paddingVertical: 10,
    backgroundColor: "#177409",
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "#fff",
    fontWeight: 900,
    width: "100%",
    paddingLeft: 120,
    marginTop: 10,
    fontSize: 20,
  },
  credentialBox: {
    backgroundColor: "#353635",
    width: "90%",
    borderWidth: 1,
    marginHorizontal: 25,
    padding: 30,
    marginTop: 50,
    borderRadius: 20,
    position: "relative",
  },
  signupText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 600,
    marginBottom: 10,
    marginLeft: 9,
  },
  pickerWrapper: {
    backgroundColor: "#474746",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  picker: {
    fontSize: 18,
    width: "100%",
    color: "#fff",
  },
  tc: {
    flexDirection: "row",
    alignItems: "center",
    width: 260,
  },
  tcText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: -10,
  },
  link: {
    color: "#177409",
    fontSize: 16,
    fontWeight: 700,
  },
  redirect: {
    marginVertical: 50,
    marginLeft: 100,
  },
  redirectText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
  },
});
