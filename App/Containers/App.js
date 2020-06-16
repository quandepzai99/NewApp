import React from "react";
import { ReactNode } from "react";

import RootProvider from "./RootContainer";
import AppNavigation from "../Navigation/AppNavigation";

const App: ReactNode = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
