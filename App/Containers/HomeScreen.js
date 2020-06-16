import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import News from "./Components/HomeScreenNews";
import CategoryIcon from "./Components/HomeScreenCategoryIcon";
import Header from "./Components/HomeScreenHeader";
import FavoriteBrands from "./Components/HomeScreenFavoriteBrands";
import ContentTabView from "./Components/HomeScreenContentTabView";
import Product from "./Components/HomeScreenProduct";

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <CategoryIcon />
      <News />
      <Product />
      <FavoriteBrands />
      <ContentTabView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
