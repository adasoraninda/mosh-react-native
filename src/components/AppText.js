import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = ({ children, style, maxLines }) => {
  return (
    <View>
      <Text numberOfLines={maxLines} style={[styles.text, style]}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
