import React from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import HomeScreenNews from "../Components/HomeScreenNews";
import HomeScreenCategoryIcon from "../Components/HomeScreenCategoryIcon";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenFavoriteBrands from "../Components/HomeScreenFavoriteBrands";
import HomeScreenContentTabView from "../Components/HomeScreenContentTabView";
import HomeScreenProduct from "../Components/HomeScreenProduct";

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} />
      <HomeScreenHeader />
      <HomeScreenCategoryIcon />
      <HomeScreenNews />
      <HomeScreenProduct />
      <HomeScreenFavoriteBrands />
      <HomeScreenContentTabView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
