import { StyleSheet, View, Image, StatusBar } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.buttonContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <View style={{ height: 24 }} />
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeIcon: {
    width: 50,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
});
