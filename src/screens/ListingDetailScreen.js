import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          Redddddddddddddddddddddddddddddddddddddd
        </AppText>
        <AppText style={styles.price}>$ 2000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo-red.png")}
            title="Redddddddddddddddddddddddddddddddddddddddddd"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
