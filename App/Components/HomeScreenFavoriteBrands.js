import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions
} from "react-native";
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

export default function HomeScreenFavoriteBrands() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderFavoriteBrand}>
        Thương hiệu yêu thích của bạn
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={brands}
        renderItem={Item}
        style={{height: (130 / 414) * Dimensions.get('screen').width}}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 15,
  },
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
  HeaderFavoriteBrand: {
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet,
    marginLeft: 16
  },
  icon_name: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16
  }
});
