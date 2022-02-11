import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} maxLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} maxLines={1}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detailsContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "cover",
  },
  subTitle: {
    color: colors.meidum,
  },
  title: {
    fontWeight: "500",
  },
});
