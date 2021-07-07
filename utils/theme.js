
import {
  defaultHeader,
  cancelSaveHeader
} from "./headers";


const theme = {
  colors: {
    primary: "#171a23ff",
    primaryPalm: "#171a23be",
    secondary: "#2197b4ff",
    warning: "#ef8215ff",
    warningFade: "#ef8215da",
    danger: "#F1222D",
    gray: "#858585",
    white: "#ffffff"
  },
  header: {
    default: defaultHeader(),
    update: defaultHeader(),
    account: defaultHeader(),
    locations: defaultHeader(),
    other: cancelSaveHeader("Lokasyon mwen yo"),
  },
  primaryButton: {
    color: "#00548F",
    disabledColor: "#d9d9d9"
  },
  font: {
    regular: "Inter_400Regular",
    semiBold: "Inter_600SemiBold",
  },
  mainBackgroundColor: "#f5f5f5",
  formLabel: {
    color: "#262626",
    size: "16px",
  },
  formInput: {
    size: "15px",
    placeholderTextColor: "#a0a0a0"
  }
}

export default theme;