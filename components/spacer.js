import { Platform, View } from "react-native";

export const Spacer = ({ w, h }) => {
  return <View style={{ width: w || 0, height: h || 0 }}></View>;
};

export const SpacerA = ({ w, h }) => {
  return (
    Platform.OS == "android" && (
      <View style={{ width: w || 0, height: h || 0 }}></View>
    )
  );
};

export const SpacerI = ({ w, h }) => {
  return (
    Platform.OS == "ios" && (
      <View style={{ width: w || 0, height: h || 0 }}></View>
    )
  );
};
