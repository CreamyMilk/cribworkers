import { TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";

export function HapticButton({ onPress, children, style }) {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (onPress) {
          onPress();
        }
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
