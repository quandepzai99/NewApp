import React, { useReducer } from "react";
import LanguageProvider from "./LanguageProvider";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children
  );
};

export default function Provider(props) {
  return (
    <ContextProviderComposer
      contextProviders={[
        <LanguageProvider key="language" />,
        <ThemeProvider key="theme" />,
        <AuthProvider key="auth" />
      ]}
      children={props.children}
    />
  );
}
