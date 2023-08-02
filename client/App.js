import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/LoginSignup/Login/Login";
import Signup from "./src/screens/LoginSignup/Signup/Signup";
import MainPage from "./src/screens/MainPage/MainPage";
import Chats from "./src/screens/ChatSection/Chats";
import { store } from "./src/redux/store"; // Import the store object
import Requests from "./src/screens/Requests/Requests";
import Notifications from "./src/screens/Notifications/Notifications";
import NavProfileMenu from "./src/screens/Menus/NavProfileMenu";
import HeaderNavMenu from "./src/screens/Menus/HeaderNavMenu";
import MyProfile from './src/screens/Profile/MyProfile'
<<<<<<< HEAD
import UploadPost from "./src/screens/Post/UploadPost";
import ForgotPassword from './src/screens/LoginSignup/ForgotPassword/ForgotPassword'
import EditProfile from "./src/screens/Settings/EditProfile";
import OtherUser_Profile from "./src/screens/Profile/OtherUser_Profile";
=======
import ChatList from "./src/screens/ChatSection/ChatList";
>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
           headerShown: false,
           animation: "slide_from_right"
         }}
       >
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="MainPage" component={MainPage} />
         <Stack.Screen name="Chats" component={Chats} />
         <Stack.Screen name="Requests" component={Requests} />
         <Stack.Screen name="Notifications" component={Notifications} />
         <Stack.Screen name="HeaderNavMenu" component={HeaderNavMenu} />
         <Stack.Screen name="NavProfileMenu" component={NavProfileMenu} />
         <Stack.Screen name="MyProfile" component={MyProfile} />
<<<<<<< HEAD
         <Stack.Screen name="OtherUser_Profile" component={OtherUser_Profile} />
         <Stack.Screen name="UploadPost" component={UploadPost} />
         <Stack.Screen name="EditProfile" component={EditProfile} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
=======
         <Stack.Screen name="ChatList" component={ChatList}/>
>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
       </Stack.Navigator>
     </NavigationContainer>
   );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
