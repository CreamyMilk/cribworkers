import { accentColor } from "../styles/main";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export function renderCollectionTx({ transaction }) {
  let date = new Date(transaction?.date);
  let dateTime = date.toDateString() + " " + date.toLocaleTimeString();

  return (
    transaction && (
      <TouchableOpacity
        key={transaction.id}
        style={transactionItemstyles.transactionItem}
      >
        <View
          style={{
            borderRadius: 50,
            backgroundColor: accentColor,
            padding: 4,
          }}
        >
          <MaterialIcons
            name={transaction.type == "rent" ? "details" : "bolt"}
            size={28}
            color="black"
            style={{ marginBottom: 1, marginLeft: 0.7 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginStart: 10,
            marginEnd: "auto",
          }}
        >
          <Text style={{ fontSize: 18 }}>{transaction.title}</Text>
          {/* <Text style={{ fontSize: 10, paddingTop: 4, fontWeight: "300" }}>
            {dateTime}
          </Text> */}
        </View>

        <Text style={{ fontSize: 20,color:'grey' }}> Ksh. {transaction.amount} </Text>
      </TouchableOpacity>
    )
  );
}


export function renderTransaction({ transaction }) {
  let date = new Date(transaction?.date);
  let dateTime = date.toDateString() + " " + date.toLocaleTimeString();

  return (
    transaction && (
      <TouchableOpacity
        key={transaction.id}
        style={transactionItemstyles.transactionItem}
      >
        <View
          style={{
            borderRadius: 50,
            backgroundColor: accentColor,
            padding: 4,
          }}
        >
          <MaterialIcons
            name={transaction.type == "rent" ? "details" : "bolt"}
            size={28}
            color="black"
            style={{ marginBottom: 1, marginLeft: 0.7 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginStart: 10,
            marginEnd: "auto",
          }}
        >
          <Text style={{ fontSize: 18 }}>{transaction.title}</Text>
          {/* <Text style={{ fontSize: 10, paddingTop: 4, fontWeight: "300" }}>
            {dateTime}
          </Text> */}
        </View>

        <Text style={{ fontSize: 20,color:'grey' }}>{transaction.amount} %</Text>
      </TouchableOpacity>
    )
  );
}

const transactionItemstyles = StyleSheet.create({
  transactionItem: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: "center",
  },
});
