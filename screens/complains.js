import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {
    accentColor,
    lightGrey,
    linkColor,
    primaryColor,
    styles,
    successGreen,
} from "../styles/main";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { HapticButton } from "../components/hapticButtons";

export default function ChatScreen({ navigation }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState(
        Array(40).fill({
            text: "oppsiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiieeeeeeeeeeeeeeeeiiss",
            when: new Date(),
        })
    );
    const scrollRef = useRef();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[chatboxStyles.chatHeader, styles.row]}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <MaterialIcons
                        name={Platform.OS == "ios" ? "arrow-back-ios" : "arrow-back"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Send Your Complain Here</Text>
                <HapticButton>
                    <Ionicons name="reload" size={24} color="black" />
                </HapticButton>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "android" ? 30 : 50}
                style={styles.container}
            >
                <ScrollView
                    ref={scrollRef}
                    onContentSizeChange={() =>
                        scrollRef.current?.scrollToEnd({ animated: true })
                    }
                    style={chatboxStyles.messagesContainer}
                >
                    {messages.map((msg, index) => (
                        <View
                            style={[
                                chatboxStyles.messageView,
                                {
                                    alignSelf: index % 2 > 0 ? "flex-start" : "flex-end",
                                    backgroundColor: index % 2 > 0 ? accentColor : linkColor,
                                },
                            ]}
                            key={index}
                        >
                            <Text>{msg.text}</Text>
                            <View style={[styles.row, chatboxStyles.messageDateView]}>
                                <Text style={chatboxStyles.messageDate}>
                                    {msg.when.toDateString()} {msg.when.toLocaleTimeString()}{" "}
                                </Text>
                                {index % 2 == 0 && (
                                    <Ionicons
                                        name="md-checkmark-done"
                                        size={15}
                                        color={successGreen}
                                    />
                                )}
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View
                    style={[
                        styles.textinput,
                        styles.row,
                        { marginHorizontal: 10, paddingTop: 12 },
                    ]}
                >
                    <TextInput
                        style={{ flexGrow: 1, maxWidth: "90%", marginEnd: 10 }}
                        multiline
                        placeholder="Type Message Here"
                        onChangeText={(e) => setMessage(e)}
                        value={message}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setMessages([...messages, { text: message, when: new Date() }]);
                            setMessage("");
                        }}
                    >
                        <Ionicons name="md-send" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const chatboxStyles = StyleSheet.create({
    chatHeader: { padding: 20, backgroundColor: primaryColor },
    messagesContainer: {
        paddingHorizontal: 10,
        backgroundColor: primaryColor,
    },
    messageView: {
        flexDirection: "column",
        marginVertical: 10,
        borderRadius: 10,
        maxWidth: Dimensions.get("window").width * 0.75,
        padding: 10,
    },
    messageDateView: { justifyContent: "flex-end", marginTop: 10 },
    messageDate: { fontSize: 12, color: lightGrey },
});



export function ComplainsList({ navigation }) {
    let sampleComplaintMetaData = [
        {
            id: "5864a0f-3da1-471f-bd96-145571e29d72",
            title: "A3",
            lastMessage: "What up with my water ?",
            date: "2022-02-06T20:00:00Z",
        },
        {
            id: "bd7aca-c1b146c2-aed5-3ad53abb28ba",
            title: "A6",
            lastMessage: "What up with my water ?",
            date: "2022-02-04T18:00:00Z",
        },
        {
            id: "bd7acbe-c1b1-46c2-aed5-3ad53abb28ba",
            title: "B4",
            lastMessage: "What up with my water ?",
            date: "2022-02-04T18:00:00Z",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad3abb28ba",
            title: "A7",
            lastMessage: "What up with my water ?",
            date: "2022-02-04T18:00:00Z",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-ad53abb28ba",
            title: "A75",
            lastMessage: "What up with my water ?",
            date: "2022-02-04T18:00:00Z",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa973",
            title: "B5",
            lastMessage: "What up with my water ?",
            date: "2022-01-12T15:04:05Z",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-73",
            title: "D7",
            lastMessage: "What up with my water ?",
            date: "2022-01-12T15:04:05Z",
        },
    ];
    return (
             <SafeAreaView style={styles.container}>
            {sampleComplaintMetaData.map(
                (chat) =>
                    renderComplainChatSummary({ chat, navigation })
            )}
</SafeAreaView>
    );
}

export function renderComplainChatSummary({ chat, navigation }) {
    let date = new Date(chat?.date);
    let dateTime = date.toLocaleTimeString();

    return (
        chat && (
            <TouchableOpacity
                key={chat.id}
                style={complaintItemstyles.complaintItem}
                onPress={() => navigation.navigate("Chat")}
            >
                <View
                    style={{
                        // borderRadius: 50,
                        backgroundColor: accentColor,
                        padding: 15,

                    }}
                >
                    {/* <MaterialIcons
            name={transaction.type == "rent" ? "details" : "bolt"}
            size={28}
            color="black"
            style={{ marginBottom: 1, marginLeft: 0.7 }}
          /> */}
                    <Text>{chat.title}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        marginStart: 10,
                        marginEnd: "auto",
                    }}
                >
                    <Text style={{ fontSize: 18 }}>{chat.lastMessage}</Text>
                    <Text style={{ fontSize: 10, paddingTop: 4, fontWeight: "300" }}>
                        {dateTime}
                    </Text>
                </View>

                <Text style={{ fontSize: 15, color: 'grey' }}> {Math.floor(Math.random() * 10) % 2 == 0 ? "✅" : "⏰"} </Text>
            </TouchableOpacity>
        )
    );
}

const complaintItemstyles = StyleSheet.create({
    complaintItem: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 15,
        marginHorizontal: 5,
        alignItems: "center",
    },
});


