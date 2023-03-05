import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";
import { HapticButton } from "./hapticButtons";
import { Spacer } from "./spacer";

export function RentProgressCard({ onClickMe, totalRentdue, collectedPerc }) {
  return (
    <HapticButton onPress={onClickMe}>
      <View style={[styles.float, rentCardStyles.rentcard]}>
        <Text style={styles.lightText}>Collection progress</Text>
        <Spacer h={10} />
        <Text style={rentCardStyles.rentBalance}>{collectedPerc}% collected</Text>
        <Spacer h={15} />
        <Text style={{ color: "grey", fontSize: 10 }}>Ksh.{totalRentdue} left</Text>
      </View>

    </HapticButton>
  );
}

const rentCardStyles = StyleSheet.create({
  rentcard: {
    padding: 20,
    borderRadius: 25,
    margin: 8,
    flexDirection: "column",
    backgroundColor: "white",
  },
  rentBalance: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
  payButton: {
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#000",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
    alignSelf: "flex-start",
  },
});
