import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import images from "../Images/images";
import styles from "./styles/HomeScreenProductStyle";

const proData = [
  {
    image: images.pro1,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus
  },
  {
    image: images.pro2,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus
  },
  {
    image: images.pro2,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus
  }
];

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.itemProduct}>
      <Image source={item.image} style={{ alignSelf: "center" }} />
      <Text style={styles.desc}>{item.desc}</Text>
      <View style={styles.box}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.plus}>
          <Image source={item.plus} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreenProduct() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
        <Text style={styles.title}>Mua sắm với UrBox</Text>
        <Text style={styles.xemTtC}>Xem tất cả</Text>
      </View>
      <View style={{ height: 300 }}>
        <FlatList
          data={proData}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keybroardShouldPersisTaps={"always"}
        />
      </View>
    </View>
  );
}
