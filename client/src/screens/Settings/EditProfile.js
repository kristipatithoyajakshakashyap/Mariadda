import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/MainPage/Header";
import { useDispatch, useSelector } from "react-redux";
import { profileSuccess } from "../../redux/actions/profile";
import axios from "axios";
import { APP_BACKEND_URL } from "@env";
import { Picker } from "@react-native-picker/picker";

const EditProfile = ({ navigation, route }) => {
  const userData = route.params;
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(userData.user.username);
  const [email, setEmail] = useState(userData.user.email);
  const [phone, setPhone] = useState(userData.user.phoneNumber);
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState(userData.user.gender);
  // console.log("user from state", userData);
  useEffect(() => {
    if (userData && userData.user.dob) {
      const dob = new Date(userData.user.dob); // Replace this with your actual date value
      const date = dob.toISOString().split("T")[0];
      setDOB(date);
    }
  }, [user]);
  const handleUpdate = async () => {
    try {
      const response = await axios.post(`${APP_BACKEND_URL}/updateprofile`, {
        username: username,
        email: email,
        phoneNumber: phone,
        dob: dob,
        gender: gender,
        id: userData.user._id
      });
      console.log(response.data)
      dispatch(profileSuccess(response.data));
      navigation.navigate("MyProfile");
    } catch (error) {
      // Handle the error and display any validation errors to the user
      if (error.response && error.response.data && error.response.data.error) {
        console.log("Validation Error:", error.response.data.error);
      } else {
        console.log("Server Error:", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Header navigation={navigation} />
      </View>
      <ScrollView style={styles.editBody}>
        <View style={styles.body}>
          <View style={styles.input}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>
              Birthday
              <Text style={styles.phone}>{"  "}(yyyy-mm-dd)</Text>{" "}
            </Text>
            <TextInput
              style={styles.textInput}
              value={dob}
              onChangeText={(text) => setDOB(text)}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>
              Phone number{" "}
              <Text style={styles.phone}>(this is not shown to everyone)</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={styles.pickerWrapper}>
            <Text style={styles.inputText}>Gender</Text>
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
          <View style={styles.submit}>
            <Text style={styles.btn} onPress={handleUpdate}>
              Save
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44f205"
  },
  editBody: {
    backgroundColor: "#000",
    width: "100%"
  },
  inputText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 6
  },
  body: {
    marginBottom: 40,
    backgroundColor: "#2d2e2e",
    width: "90%",
    marginLeft: "5%",
    marginTop: 30,
    padding: 8,
    borderRadius: 15
  },
  input: {
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginVertical: 20
  },
  textInput: {
    color: "#fff",
    fontSize: 16
  },
  phone: {
    fontSize: 15
  },
  pickerWrapper: {
    paddingHorizontal: 10,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginHorizontal: 10
  },
  picker: {
    fontSize: 18,
    width: "100%",
    color: "#fff"
  },
  submit: {
    padding: 10,
    Width: 30,
    marginTop: 30,
    alignItems: "center"
  },
  btn: {
    padding: 20,
    backgroundColor: "#44f205",
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    borderRadius: 20
  }
});
