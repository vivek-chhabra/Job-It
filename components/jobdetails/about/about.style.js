import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.small,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: 'bold'
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
