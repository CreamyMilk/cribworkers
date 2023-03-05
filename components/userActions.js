import { StyleSheet, Text, View } from "react-native";
import { HapticButton } from "./hapticButtons";
import { styles } from "../styles/main";
import { MaterialIcons } from "@expo/vector-icons";

export function UserActions({ onClickPaid, onComplain }) {
    return (
      <View style={actionStyles.actionView}>
        <HapticButton onPress={onClickPaid} style={actionStyles.action}>
          <MaterialIcons name="details" style={actionStyles.actionIcon} />
          <Text style={styles.lightText}>Paid</Text>
        </HapticButton>
  
        <HapticButton onPress={onComplain} style={actionStyles.action}>
          <MaterialIcons name="chat" style={actionStyles.actionIcon} />
          <Text style={styles.lightText}>Complaints</Text>
        </HapticButton>
  
      </View>
    );
  }
  
  const actionStyles = StyleSheet.create({
    actionView: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 30,
    },
    action: {
      flexDirection: "column",
      alignItems: "center",
    },
    actionIcon: {
      fontSize: 40,
      marginBottom: 5,
    },
  });
  