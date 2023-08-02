import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Cover from "../../components/Profile/Cover";
import { useDispatch, useSelector } from "react-redux";
import ProfilePictureInfos from "../../components/Profile/ProfilePictureInfos";
import ProfileNav from "../../components/Profile/ProfileNav";
import Tags from "../../components/MainPage/Tags";
import UserDetails from "../../components/Profile/UserDetails";
import Header from "../../components/MainPage/Header";
import BottomNav from "../../components/BottomNav";
import MoreInfo from "../../components/Profile/MoreInfo";
import PostUpload from "../../components/Post/PostUpload";
import axios from "axios";
import { APP_BACKEND_URL } from "@env";
import { profileSuccess } from "../../redux/actions/profile";
import Posts from "../../components/Post/Posts";

const OtherUser_Profile = ({ route, navigation }) => {
  const user = route.params;
  // console.log(user.username);
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState([]);
  const loadData = async () => {
    try {
      const response = await axios.get(
        `${APP_BACKEND_URL}/getProfile/${user.username}`
      );
      setProfile(response.data);
      setPosts(response.data.posts);
    } catch (error) {
      console.log("Error fetching profile:", error.message);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <Header navigation={navigation} />
          <Cover user={profile} />
          <ProfilePictureInfos
            user={profile}
            navigation={navigation}
            page={"OtherUser_Profile"}
          />
          <View style={styles.line} />
          <View style={styles.header}>
            <ProfileNav user={profile} />
          </View>
          <UserDetails user={profile} />
          <MoreInfo />
          <PostUpload
            user={profile}
            navigation={navigation}
            page={"MyProfile"}
          />
          <View style={styles.taglist}>
            <Tags />
          </View>
          {posts?.map((post) => (
            <View key={post._id} style={styles.post}>
              <Posts post={post} navigation={navigation} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OtherUser_Profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44f205",
    paddingBottom: 100
  },
  profile: {
    Width: "100%",
    height: "100%",
    marginTop: 25,
    backgroundColor: "black",
    marginBottom: 80
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#575958"
  },
  header: {
    backgroundColor: "#fff",
    height: 45
  },
  taglist: {
    marginTop: 20,
    marginBottom: -30
  },
  post: {
      paddingTop: 30
  }
});
