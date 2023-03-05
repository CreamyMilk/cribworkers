import { accentColor, linkColor, primaryColor } from "../styles/main";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import { renderCollectionTx, renderTransaction } from "../components/transactionItem";

export const DATA = [
  {
    id: "5864a0f-3da1-471f-bd96-145571e29d72",
    title: "John A3",
    amount: "5000",
    date: "2022-02-06T20:00:00Z",
    type: "rent",
  },
  {
    id: "bd7aca-c1b146c2-aed5-3ad53abb28ba",
    title: "Sally A3",
    amount: "20000",
    date: "2022-02-04T18:00:00Z",
    type: "rent",
  },
  {
    id: "bd7acbe-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sam B4",
    amount: "20000",
    date: "2022-02-04T18:00:00Z",
    type: "rent",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad3abb28ba",
    title: "Peter A7",
    amount: "20000",
    date: "2022-02-04T18:00:00Z",
    type: "rent",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-ad53abb28ba",
    title: "Sam A70",
    amount: "20000",
    date: "2022-02-04T18:00:00Z",
    type: "rent",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa973",
    title: "Sally A3 - Feb",
    amount: "1000",
    date: "2022-01-12T15:04:05Z",
    type: "token",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-73",
    title: "Peter D4 - Jan",
    amount: "1000",
    date: "2022-01-12T15:04:05Z",
    type: "token",
  },
];

const Tab = createMaterialTopTabNavigator();

export default function RentCollectionList() {
  return (
    <View style={transactionstyles.transactionView}>
      <Tab.Navigator
        initialRouteName="Paid"
        screenOptions={{
          tabBarLabelStyle: transactionstyles.tabBarLabelStyle,
          tabBarStyle: transactionstyles.tabBarLabel,
          tabBarIndicatorStyle: transactionstyles.tabBarIndicatorStyle,
          tabBarPressColor: linkColor,
        }}
      >
        <Tab.Screen
          name="Paid"
          component={RentTransactions}
          options={{ tabBarLabel: "Paid" }}
        />
        <Tab.Screen
          name="Due"
          component={TokenTransactions}
          options={{ tabBarLabel: "Due" }}
        />
      </Tab.Navigator>
    </View>
  );
}

function TokenTransactions() {
  return (
    <View style={transactionstyles.transactionTab}>
      {DATA.map(
        (transaction) =>
          transaction.type == "token" && renderCollectionTx({ transaction })
      )}
    </View>
  );
}

function RentTransactions() {
  return (
    <View style={transactionstyles.transactionTab}>
      {DATA.map(
        (transaction) =>
          transaction.type == "rent" && renderCollectionTx({ transaction })
      )}
    </View>
  );
}

const transactionstyles = StyleSheet.create({
  transactionView: {
    padding: 20,
    backgroundColor: primaryColor,
    flex: 1,
  },
  transactionTab: {
    backgroundColor: primaryColor,
    flex: 1,
  },
  tabBarLabelStyle: {
    fontSize: 15,
    paddingVertical: 0,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  tabBarLabel: {
    backgroundColor: accentColor,
    borderRadius: 50,
  },
  tabBarIndicatorStyle: {
    backgroundColor: "#fff",
    height: "84%",
    bottom: "8%",
    left: "1.5%",
    borderRadius: 20,
    width: "47%",
  },
});
