import React from "react";
import Provider from "../Providers";

function RootProvider(props) {
  return <Provider>{props.children}</Provider>;
}

export default RootProvider;
