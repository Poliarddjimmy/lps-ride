import { Platform } from "react-native";

const isWeb = Platform.OS === "web";
const isAndroid = Platform.OS === "android";
const isIOS = Platform.OS === "ios";
const isMobile = Platform.OS === "ios" || Platform.OS === "android";

export {
  isWeb,
  isAndroid,
  isIOS,
  isMobile
}