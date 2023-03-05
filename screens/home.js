import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";
import { linkColor, primaryColor, styles } from "../styles/main";
import { Spacer } from "../components/spacer";
import { RentProgressCard } from "../components/rentProgressCard";
import { UserActions } from "../components/userActions";
import { renderTransaction } from "../components/transactionItem";
import { DATA } from "../components/mockdata";

export default function Home({ navigation }) {
  const paySheetRef = useRef();
  const [paymentType, setPaymentType] = useState("rent");
  let usename = "Oliver"

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
        alwaysBounceVertical={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={homestyles.header}>
          <Text style={homestyles.headerText}>Welcome: {usename} 🚀</Text>
        </View>

         <Spacer h={20} />
        <RentProgressCard
          onClickMe={() => alert("we move")}
          totalRentdue="23,007,123"
          collectedPerc="70"
        />
         <UserActions
          onComplain={() => navigation.navigate("ComplainsList")}
          onClickPaid={() => navigation.navigate("Collections")}
        />


        <Spacer h={20} />

        <View style={styles.row}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Collection History
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Transactions")}>
            <Text style={homestyles.linkTitle}>See all</Text>
          </TouchableOpacity>
        </View>

        {DATA.map(
          (transaction, index) =>
            index < 3 && renderTransaction({ transaction })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const homestyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: primaryColor,
  },
  headerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
    marginRight: "auto",
  },
  linkTitle: {
    color: linkColor,
    fontSize: 16,
    fontWeight: "500",
  },
});
