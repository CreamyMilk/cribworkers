import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Spacer } from "../components/spacer";
import { styles } from "../styles/main";

export default function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  async function LoginWorker() {
    const body = {
      phone: phone,
      pin: pin,
    };
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={{ marginHorizontal: 10 }}>
        <View style={styles.column_center}>
        <Spacer h={100} />
          <Text style={{ fontSize: 20 }}>ICRIB Agent Login</Text>
            <Spacer h={20} />
          <Text style={{ fontSize: 10 }}>The Future of Housing</Text>
        </View>
        <Spacer h={100} />
        <Text style={{ fontWeight: "bold" }}>Username</Text>
        <TextInput
          onChangeText={(e) => setPhone(e)}
          value={phone}
          placeholder="Enter UserName"
          keyboardType="default"
          textContentType="familyName"
          style={styles.textinput}
        />
        <Spacer h={10} />
        <Text style={{ fontWeight: "bold" }}>Password</Text>
        <TextInput
          onChangeText={(e) => setPin(e)}
          value={pin}
          placeholder="Enter account passowrd"
          textContentType="password"
          keyboardType="numeric"
          style={styles.textinput}
          maxLength={4}
        />
        <TouchableOpacity
          onPress={() => LoginWorker()}
          style={styles.formButton}
        >
          <Text style={styles.formButtonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
