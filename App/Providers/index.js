import React, { useReducer } from "react";
import LanguageProvider from "./LanguageProvider";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children
  );
};

export default function Provider(props) {
  return (
    <ContextProviderComposer
      contextProviders={[<LanguageProvider key="language" />]}
      children={props.children}
    />
  );
}
