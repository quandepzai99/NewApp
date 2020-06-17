import React, { useReducer } from "react";
import LanguageProvider from "./LanguageProvider";

// Composer
// Một Provider phải wrap xung quanh các component thì các component mới có
// thể access context của Provider qua useContext()
// Để phòng trường hợp Provider hell (VD: 
// <FirstProvider>
//   <SecondProvider>
//     <ThirdProvider>
//       ...) thì em viết 1 function để chỉ cần ném các Provider vào 1 array
// thì nó tự tạo cái wrap xung quanh như trên, nhìn code đỡ xấu

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
