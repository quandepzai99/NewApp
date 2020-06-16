import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import colors  from "../Themes/colors";
import images from "../Images/images";
import DataTimePicker from "@react-native-community/datetimepicker";
import Page1 from "./HomeScreenDetailPage1";
import Page2 from "./HomeScreenDetailPage2";
import Page3 from "./HomeScreenDetailPage3";
import { navigationRef } from "../Navigation/RootNavigation";

function navigate(name, id) {
  navigationRef.current && navigationRef.current.navigate(name, id);
}

const tempData = [
  {
    id: Page1,
    image: images.banner1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBox",
    time: images.times
  },
  {
    id: Page2,
    image: images.banner1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBo",
    time: images.times
  },
  {
    id: Page3,
    image: images.banner1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
    name: "UrBx",
    time: images.times
  }
];
export default class HomeScreenNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      showListVisible: false,
      date: new Date()
    };
  }

  // toggleListModal = (id) => {
  //   this.props.navigation.navigate(id)
  // }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.btnBanner}
        onPress={() => navigate("Page1")}>
        <View>
          <Image source={item.image} style={{ borderRadius: 12 }} />
          <Text style={styles.desc}>
            <Text style={{ color: "red", fontWeight: "bold" }}>[Hot] </Text>
            {item.desc}
          </Text>
          <View style={styles.divider}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.time} style={{ left: 100 }} />
            {/*<DataTimePicker*/}
            {/*  value={new Date()}*/}
            {/*  onChange={this.showDatePicker}*/}
            {/*  mode={'date'}*/}
            {/*  testID="dateTimePicker"*/}
            {/*  format="DD-MM-YYYY"*/}
            {/*/>*/}
            <Text style={styles.name}>
              11-06-2020
              {/*{this.state.date}*/}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // const { isVisible } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Tin tức{" "}
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
            renderItem={this._renderItem}
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

const styles = StyleSheet.create({
  container: {
    top: 10
  },
  title: {
    marginLeft: 16,
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0,
    color: colors.velvet
  },
  btnBanner: {
    top: 10,
    borderRadius: 12,
    marginHorizontal: 16,
    alignItems: "center",
    width: 368,
    height: 260,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  desc: {
    paddingVertical: 10,
    fontSize: 15,
    paddingRight: 30,
    padding: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.greyishBrown
  },
  name: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    color: colors.blueGrey
  },
  divider: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.paleGreyFour,
    borderTopWidth: 1,
    left: 10,
    marginRight: 20
  }
});
