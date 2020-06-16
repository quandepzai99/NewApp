import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import images from "../Images/images";
import colors from "../Themes/colors";

const brands = [
  {
    image: images.logo_urbox,
    name: "Urbox"
  },
  {
    image: images.logo_the_coffee_house,
    name: "The Coffee House"
  },
  {
    image: images.logo_mobifone,
    name: "Mobifone"
  },
  {
    image: images.logo_vinid,
    name: "VinID"
  },
  {
    image: images.logo_bee,
    name: "Bee"
  },
  { image: images.logo_dienmayxanh, name: "Điện máy xanh" }
];

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.scrollStyle}>
      <Image
        source={images.frame_item}
        style={{
          width: (110 / 414) * Dimensions.get("screen").width,
          height: 112
        }}
      />
      <View style={styles.logo_icon}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={{ borderRadius: 38 }}
        />
      </View>
      <View
        style={{
          width: (110 / 414) * Dimensions.get("screen").width,
          justifyContent: "center",
          marginTop: -45,
          marginBottom: 10
        }}>
        <Text
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
          style={styles.icon_name}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function ItemList() {
  return (
    <View style={{ height: 300 }}>
      <FlatList
        horizontal={true}
        data={brands}
        renderItem={Item}
        style={{
          paddingBottom: 5
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default function HomeScreenContentTabView() {
  return (
    <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
      style={{ height: 250, top: 20 }}>
      <ItemList tabLabel="Nổi  bật" />
      <ItemList tabLabel="Ăn uống" />
      <ItemList tabLabel="Du lịch" />
      <ItemList tabLabel="Mua sắm" />
      <ItemList tabLabel="Something" />
    </ScrollableTabView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    marginTop: 20,
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    alignItems: "center",
    marginLeft: 16
  },
  tabView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.01)"
  },
  iconStyle: {
    width: 72,
    height: 72,
    borderRadius: 38,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    shadowColor: "rgba(22, 60, 132, 0.1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    position: "absolute"
  },
  container: {
    top: 30
  },
  logo_icon: {
    width: 72,
    height: 72,
    borderRadius: 38,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    shadowColor: "rgba(22, 60, 132, 0.1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    position: "absolute"
  },
  icon_name: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16
  }
});
