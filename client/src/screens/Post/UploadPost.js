import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import PostFooter from "../../components/Post/PostFooter";
import { useSelector } from "react-redux";
import axios from "axios";
import { APP_BACKEND_URL } from "@env";

const UploadPost = ({ navigation, route }) => {
  const { page } = route.params;
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const userData = useSelector((state) => state.user.userData);
  const [loading, setLoading] = useState(false);
  const [remainingChars, setRemainingChars] = useState(5000);
  // console.log(userData.id);
  const uploadPost = async () => {
    try {
      setLoading(true);
      const type = "post";
      const response = await axios.post(`${APP_BACKEND_URL}/createPost`, {
        userId: userData.id,
        image: post,
        description: description,
        type
      });
      setLoading(false);
      setPost(null);
      setDescription("");
      navigation.navigate("MainPage");
    } catch (error) {
      setLoading(false);
      setPost(null);
      setDescription("");
      console.error("Error creating post: ", error);
    }
  };
  const handleTextChange = (text) => {
    if (text.length <= 5000) {
      setDescription(text);
    }
    const charsLeft = 5000 - text.length;
    setRemainingChars(charsLeft);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.postHeader}>
          {page === "MainPage" ? (
            <Entypo
              name="cross"
              size={30}
              color="#848785"
              onPress={() => {
                page === "MainPage"
                  ? navigation.navigate("MainPage")
                  : navigation.navigate("MyProfile");
              }}
              style={{ flex: 1 }}
            />
          ) : (
            <Entypo
              name="cross"
              size={30}
              color="#848785"
              onPress={() => navigation.navigate("MyProfile")}
              style={{ flex: 1 }}
            />
          )}
          <View style={styles.postHeaderRight}>
            <Text style={styles.textLenght}>{remainingChars}</Text>
            <Text style={styles.headerbtn} onPress={() => uploadPost()}>
              Publish
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <TextInput
          style={styles.textArea}
          multiline
          placeholder="What's happening?"
          placeholderTextColor="#fff"
          fontWeight="600"
          fontSize={17}
          onChangeText={handleTextChange}
        />
        {post && (
          <View style={styles.imagePreview}>
            <Image
              style={styles.image}
              source={{
                uri: post
              }}
            />
            <Entypo
              name="cross"
              size={30}
              color="#848785"
              onPress={() => setPost(null)}
              style={styles.cross}
            />
          </View>
        )}
        <PostFooter setPost={setPost} />
      </View>
    </View>
  );
};

export default UploadPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#44f205",
    width: "100%",
    height: "100%"
  },
  body: {
    position: "relative",
    width: "100%",
    height: "97%",
    marginTop: 30,
    backgroundColor: "#2d2e2e"
  },
  headerbtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 15,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "#177409",
    color: "#fff",
    fontWeight: 900
  },
  postHeader: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: "center"
  },
  postHeaderRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  textLenght: {
    color: "#fff"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#575958",
    marginVertical: 10
  },
  textArea: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
    backgroundColor: "transparent",
    textAlignVertical: "top",
    paddingTop: 10,
    paddingLeft: 10,
    color: "#fff"
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 30
  },
  imagePreview: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: 300
  },
  cross: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    right: 15
  }
});
