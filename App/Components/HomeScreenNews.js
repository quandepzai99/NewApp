import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import colors from "../Themes/Colors";
import images from "../Images/images";
import DataTimePicker from "@react-native-community/datetimepicker";
import Page1 from "./HomeScreenDetailPage1";
import Page2 from "./HomeScreenDetailPage2";
import Page3 from "./HomeScreenDetailPage3";
import { navigationRef } from "../Navigation/RootNavigation";
import styles from "./styles/HomeScreenNewsStyle";

function navigate(name, id) {
  navigationRef.current && navigationRef.current.navigate(name, id);
}

const tempData = [
  {
    id: Page1,
    image: images.layer1,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBox",
    time: images.times
  },
  {
    id: Page2,
    image: images.layer1,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBo",
    time: images.times
  },
  {
    id: Page3,
    image: images.layer1,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBx",
    time: images.times
  }
];
export default function HomeScreenNews() {
  // toggleListModal = (id) => {
  //   this.props.navigation.navigate(id)
  // }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.btnBanner}
        onPress={() => navigate("HomeScreenDetailPage1")}>
        <View>
          <Image source={item.image} style={{ borderRadius: 12 }} />
          <Text style={styles.desc}>
            <Text style={{ color: "red", fontWeight: "bold" }}>[Hot] </Text>
            {item.desc}
          </Text>
          <View style={styles.divider}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.time} style={{ left: 100 }} />
            <Text style={styles.name}>02-07-2020</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Tin tức{""}
          <Text
            style={{
              color: colors.tangerine,
              fontWeight: "bold",
              fontSize: 24
            }}>
            nổi bật
          </Text>
        </Text>
        <View style={{ height: 300 }}>
          <FlatList
            data={tempData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            keybroardShouldPersisTaps={"always"}
          />
        </View>
      </View>
    );
  }
}
