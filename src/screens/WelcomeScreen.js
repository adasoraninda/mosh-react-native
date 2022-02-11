import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      blurRadius={10}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.imageLogoContainer}>
        <Image
          style={styles.imageLogo}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  imageLogoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  imageLogo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    resizeMode: "contain",
  },
  tagLine: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
