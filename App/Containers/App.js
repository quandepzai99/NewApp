import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SafeAreaView style={{justifyContent:"center",
    alignContent: "center", flex : 1}}>
      <Text style={{
        textAlign: "center"
      }}>Wololo</Text>
    </SafeAreaView>;
  }
}

export default App;
