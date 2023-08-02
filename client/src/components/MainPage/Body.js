import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Stories from "./Stories";
import Tags from "./Tags";
import PostUpload from "../Post/PostUpload";
import Posts from "../Post/Posts";
import { useSelector } from "react-redux";

const Body = () => {
  const userData = useSelector((state) => state.user.userData);
<<<<<<< HEAD
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await axios.get(`${APP_BACKEND_URL}/getAllPosts`);
    setPosts(response.data);
    // console.log("post", response)
  };
  useEffect(() => {
     fetchPosts();
     const pollingInterval = setInterval(() => {
       fetchPosts();
     }, 10000); 
     return () => clearInterval(pollingInterval);
  }, []);
=======
>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
  const getGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  // Object to map greetings to their corresponding styles
  const greetingStyles = {
    "Good morning": styles.morningGreeting,
    "Good afternoon": styles.afternoonGreeting,
    "Good evening": styles.eveningGreeting,
  };

  // Get the current greeting
  const greeting = getGreeting();

  return (
    <ScrollView style={styles.body}>
      <View style={styles.greeting}>
        <Text style={[styles.greetingText, greetingStyles[greeting]]}>
          {greeting}, Thoyajaksha Kashyap
        </Text>
        <Entypo name="cross" size={24} color="#4e4f4f" />
      </View>
      <Stories user={userData} />
      <Tags />
<<<<<<< HEAD
      <PostUpload user={userData} navigation={navigation} page={"MainPage"} />
      <View style={styles.posts}>
        {posts?.map((post) => (
          <View key={post._id} style={styles.post}>
            <Posts post={post} navigation={navigation} />
          </View>
        ))}
      </View>
=======
      <PostUpload user={userData} />
      <Posts />
>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#232324",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    justifyContent: "space-around",
    marginLeft: 10,
    marginTop: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  morningGreeting: {
    color: "green",
  },
  afternoonGreeting: {
    color: "blue",
  },
  eveningGreeting: {
    color: "orange",
  },
});
