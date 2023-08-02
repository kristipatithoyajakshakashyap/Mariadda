
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";

const ForgotPassword = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(""); // State to store the selected gender
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleGenderChange = (itemValue) => {
    setSelectedGender(itemValue);
  };
  onChangeEvent=(Text)=>{
    setSelectedGender(Text)
  }
  useEffect(()=>{
    if(selectedGender.length>=3){
      setIsChecked(true)
    }else{
      setIsChecked(false)
    }
  })


  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.loginHeader}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://www.mariadda.com/themes/wondertag/img/logo.png",
          }}
        />
       
      </View>
      
      <View style={styles.credentialBox}>
        <Text style={styles.signupText}>Forget Password</Text>
        <TextInput
          placeholder="Type Username"
          secureTextEntry={true}
          style={styles.formInput}
          onChangeText={onChangeEvent}
          placeholderTextColor="lightgray"
          fontSize={16}
        />
      
        <TouchableOpacity disabled={!isChecked}>
          <Text style={isChecked ? styles.formbtn : styles.formbtndisable}>
            Forget
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.redirect}>
        <Text style={styles.redirectText}>
          Have you recalled ?{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Login
          </Text>{" "}
        </Text>
      </View>
      <View style={{marginTop:'27%'}}>
      <Footer />
      </View>
      
    </ScrollView>
  );
};

export default ForgotPassword;

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
    marginTop: "50%",
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
