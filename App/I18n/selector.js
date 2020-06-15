import en from "./en";
import vi from "./vi";

const switchLanguage = (lang, key) => {
  const langObj = lang === "en" ? en : vi;
  return langObj[key];
};

export default switchLanguage;
