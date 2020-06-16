import React, { Component } from "react";
import { StatusBar, StyleSheet, ScrollView } from "react-native";
import News from "../Components/HomeScreenNews";
import HomeScreenCategoryIcon from "../Components/HomeScreenCategoryIcon";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import FavoriteBrands from "../Components/HomeScreenFavoriteBrands";
import ContentTabView from "../Components/HomeScreenContentTabView";
import Product from "../Components/HomeScreenProduct";

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} />
      <HomeScreenHeader />
      <HomeScreenCategoryIcon />
      {/*<News />*/}
      {/*<Product />*/}
      {/*<FavoriteBrands />*/}
      {/*<ContentTabView />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
