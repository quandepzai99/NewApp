import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import images from "../Images/images";
import styles from "./styles/HomeScreenFavoriteBrandsStyle";
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
