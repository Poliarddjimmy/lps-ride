
import {
  defaultHeader,
  updateHeader,
  accountHeader,
  otherHeader,
} from "./headers";


const theme = {
  colors: {
    primary: "#02907A",
    warning: "#F29F24",
    danger: "#F1222D",
    gray: "#858585"
  },
  header: {
    default: defaultHeader,
    update: updateHeader,
    account: accountHeader,
    other: otherHeader
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