import currencyFormatter from "currency-formatter";
import striptags from "striptags";

export default class CurrencyFormatter {
  static formatCurrencyWithDot(number) {
    return currencyFormatter.format(number, {
      symbol: "",
      decimal: ",",
      thousand: ".",
      precision: 0,
      format: "%v" // %s is the symbol and %v is the value
    });
  }

  static formatCurrencyWithVNDSymbol(number) {
    return currencyFormatter.format(number, {
      symbol: "đ ",
      decimal: ",¥.",
      thousand: ",",
      precision: 0,
      // format: "%v %s" // %s is the symbol and %v is the value
      format: "%v %s" // %s is the symbol and %v is the value
    });
  }

  static formatCurrencyWithComma(number) {
    return currencyFormatter.format(number, {
      symbol: "",
      decimal: ".",
      thousand: ",",
      precision: 0,
      format: "%v" // %s is the symbol and %v is the value
    });
  }

  static convertCommaCurrencyToNumber(str) {
    return parseFloat(str.replace(/,/g, ""));
  }

  static convertDotCurrencyToNumber(str) {
    const fm = str.replace(/\./g, "").replace(/,/g, ".");
    return parseFloat(fm);
  }

  static stripNotPTags(text) {
    return striptags(text, "<p>", "");
  }
}
