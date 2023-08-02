import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import user from "../../../assets/images/user.jpeg";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

<<<<<<< HEAD
const Posts = ({ post, navigation }) => {
  const userData = useSelector((state) => state.user.userData);
  const visitor = post.user._id === userData.id ? false : true;
  // console.log(visitor);
  const calculateTimePassed = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now.getTime() - createdDate.getTime();
    const secondsPassed = Math.floor(timeDifference / 1000);
    if (secondsPassed < 60) {
      return `${secondsPassed} seconds ago`;
    } else if (secondsPassed < 3600) {
      const minutesPassed = Math.floor(secondsPassed / 60);
      return `${minutesPassed} minutes ago`;
    } else if (secondsPassed < 86400) {
      const hoursPassed = Math.floor(secondsPassed / 3600);
      return `${hoursPassed} hours ago`;
    } else if (secondsPassed < 2592000) {
      const daysPassed = Math.floor(secondsPassed / 86400);
      return `${daysPassed} days ago`;
    } else if (secondsPassed < 31536000) {
      const monthsPassed = Math.floor(secondsPassed / 2592000);
      return `${monthsPassed} months ago`;
    } else {
      const yearsPassed = Math.floor(secondsPassed / 31536000);
      return `${yearsPassed} years ago`;
    }
  };
  // console.log(userData.id)
  const timePassed = calculateTimePassed(post?.createdAt);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        {visitor ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("OtherUser_Profile", {username: post?.user?.username})}
          >
            <Image
              source={{ uri: post?.user?.picture }}
              style={styles.postProfile}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
            <Image
              source={{ uri: post?.user?.picture }}
              style={styles.postProfile}
            />
          </TouchableOpacity>
        )}
=======
const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <TouchableOpacity>
          <Image source={user} style={styles.postProfile} />
        </TouchableOpacity>
>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
        <View style={styles.postUserDetails}>
          <Text style={styles.postUserName}>K.Thoyajaksha Kashyap</Text>
          <Text style={styles.postUserSubDetails}>
            10hrs. Translate. Hyderabad
          </Text>
        </View>
        <AntDesign
          name="caretdown"
          size={17}
          color="white"
          style={styles.down}
        />
      </View>
      <Text style={styles.caption}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
        officia! Cum sapiente enim ipsum officia doloremque tempore eaque quas,
        animi consectetur esse dicta, ab non in incidunt. Quis, modi sunt?
      </Text>
      <TouchableOpacity>
        <Image source={user} style={styles.postImage} />
      </TouchableOpacity>
      <View style={styles.footer}>
        <View style={styles.postFooterLeft}>
          <View style={styles.icon}>
            <AntDesign
              name="like1"
              size={17}
              color="white"
              style={styles.like}
            />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="comment-processing"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>10</Text>
            <FontAwesome
              name="star-o"
              size={17}
              color="blue"
              style={styles.star}
            />
          </View>
        </View>
        <View style={styles.footerRight}>
          <View style={styles.icon2}>
            <FontAwesome name="share-alt" size={20} color="#b1b5b2" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gold",
    height: 680,
    marginVertical: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  postProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  postUserDetails: {
    marginLeft: 10,
    flex: 1,
  },
  postUserName: {
    color: "#fff",
    fontSize: 18,
  },
  postUserSubDetails: {
    color: "#a8a5a5",
    fontSize: 14,
    marginTop: 5,
  },
  down: {
    marginRight: 20,
  },
  caption: {
    color: "#fff",
    marginHorizontal: 15,
    lineHeight: 22,
    fontWeight: "bold",
  },
  postImage: {
    width: 410,
    height: 400,
    resizeMode: "cover",
    marginVertical: 20,
  },
  icon: {
    alignItems: "center",
    padding: 9,
    width: 44,
    backgroundColor: "#383838",
    marginLeft: 20,
    borderRadius: 50,
  },
  icon2: {
    alignItems: "center",
    padding: 10,
    width: 40,
    backgroundColor: "#383838",
    marginLeft: 20,
    borderRadius: 50,
  },
  like: {
    backgroundColor: "#03a5fc",
    padding: 5,
    borderRadius: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postFooterLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rating: {
    backgroundColor: "#383838",
    flexDirection: "row",
    borderWidh: 10,
    marginLeft: 20,
    alignItems: "center",
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 30,
  },
  ratingCount: {
    color: "#fff",
    fontSize: 16,
  },
  star: {
    marginLeft: 6,
  },
  footerRight: {
    alignItems: "center",
    marginHorizontal: 30,
  },
});
