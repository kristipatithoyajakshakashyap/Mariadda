// import { StatusBar } from "react-native";
// import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, FlatList, View, TouchableOpacity, Image } from "react-native"
import BottomNav from "../../components/BottomNav";
// import { TouchableOpacity } from "react-native-web";
// import { View } from "react-native-web";
// import { FlatList } from "react-native-web";
// import { View } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
const chatData = [{
    id: "1",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://www.mariadda.com/themes/wondertag/img/logo.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://www.mariadda.com/themes/wondertag/img/logo.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://www.mariadda.com/themes/wondertag/img/logo.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://www.mariadda.com/themes/wondertag/img/logo.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://pngimg.com/uploads/rabbit/rabbit_PNG3776.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

},
{
    id: "2",
    photo: "https://www.mariadda.com/themes/wondertag/img/logo.png",
    date: "10 hrs",
    name: "kunal Krishana",
    message: 'hey how are you?'

}
]

const ChatList = () => {
    const [buttonhide, setButtonHide] = useState(true)
    const [renderLimit, setRenderElement] = useState(5)
     const navigation=useNavigation();
    const renderItem = ({ item }) => {


        return (
            // <View style={styles.chatCard}>
              <TouchableOpacity style={styles.chatCard} onPress={()=>navigation.navigate('Chats')}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: `${item.photo}`,
                    }}
                    resizeMode="contain"
                />
                <View style={{justifyContent:"center"}}>
                    <Text style={styles.dataText}>{item.date}</Text>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.messageText}>Me : {item.message}</Text>

                </View>
                </TouchableOpacity>
            // </View>

        )
    }

    const rederChatList = () => {
        return (
            <FlatList
                data={chatData.slice(0, renderLimit)}

                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={renderLimit}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        )
    }
    const hideHandler = () => {
        setButtonHide(false)
        setRenderElement(chatData.length)
    }
    const rederShowMore = () => {
        return (

            <TouchableOpacity style={styles.botton} onPress={hideHandler}>
                <Text style={{ padding: 10, alignSelf: 'center', color: 'green', fontWeight: "bold", fontSize: 15 }}>Show all List</Text>
            </TouchableOpacity>

        )
    }
    return (

        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar hidden={false} />
            <View style={styles.container}>
                <Text style={styles.text}>Messages</Text>
                {rederChatList()}
                {buttonhide && rederShowMore()}
            </View>
            <BottomNav />
        </SafeAreaView>




    )
}
export default ChatList;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    text: {
        fontSize: 25,
        fontWeight: "500",
        paddingTop: 10,
        paddingBottom: 20
    },
    chatCard: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: "#f0f8ff",
        borderRadius: 35,
        elevation: 2

    },
    dataText: {
        color: 'grey'
    },
    messageText: {

    },
    nameText: {
        fontSize: 20
    },
    imageStyle: {
        height: 70,
        width: 70,
        // backgroundColor: "red",
        borderRadius: 35,
        marginRight: 10
    },
    botton: {

        borderRadius: 20,
        backgroundColor: "#e0ffff"

    }


})