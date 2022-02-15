import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/logo-red.png"),
  },
  {
    id: 2,
    title: "Red jacket for sale",
    price: 200,
    image: require("../assets/logo-red.png"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    price: 300,
    image: require("../assets/logo-red.png"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={{ padding: 20 }}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
});
