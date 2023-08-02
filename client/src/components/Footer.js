import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer1}>
        <Text style={styles.link}>&copy; 2023 Mariadda .</Text>
        <Text style={styles.link}> Terms of Use .</Text>
        <Text style={styles.link}> Privacy Policy .</Text>
      </View>
      <View style={styles.footer1}>
        <Text style={styles.link}>Contact Us .</Text>
        <Text style={styles.link}> About .</Text>
        <Text style={styles.link}> Blog .</Text>
        <Text style={styles.link}> Why My Account is .</Text>
      </View>
      <View style={styles.footer1}>
        <Text style={styles.link}>Disabled? .</Text>
        <Text style={styles.link}> Work With Us .</Text>
        <Text style={styles.link}> Few of the Features .</Text>
      </View>
      <View style={styles.footer1}>
        <Text style={styles.link}>
          <MaterialIcons
            name="language"
            size={15}
            color="white"
            style={{ marginTop: 9 }}
          />
          {"  "}
          Language
        </Text>
      </View>
    </View>
  );
};

export default Footer

const styles = StyleSheet.create({
  footer: {
    marginBottom: 30,
    width: "80%",
    alignItems: "center",
    marginHorizontal: 45,
  },
  footer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    fontWeight: 600,
    marginHorizontal: 10,
    fontSize: 15,
    alignItems: "center",
  },
});