import store from "react-native-simple-store";
import moment from "moment";

export class LocalStorage {
  static get(key, defaultValue) {
    LocalStorage.flushExpiredKey(key);
    return store.get(key).then(data => {
      if (data != null) {
        return data;
      } else {
        return defaultValue;
      }
    });
  }

  static set(key, value, expireInMinute = 10000) {
    store.update(key, value);
    const time = moment()
      .add(expireInMinute, "minutes")
      .toDate()
      .getMilliseconds();
    store.push(key + "_expire", time);
  }

  static push(key, value, expireInMinute = 10000) {
    store.push(key, value);
    const time = moment()
      .add(expireInMinute, "minutes")
      .toDate()
      .getMilliseconds();
    store.push(key + "_expire", time);
  }

  static delete(key) {
    store.delete(key);
  }

  static flushExpiredKey(key) {
    let keyExpire = key + "_expire";
    store.get(keyExpire).then(data => {
      if (data != null) {
        const now = moment()
          .toDate()
          .getMilliseconds();
        if (now - data > 0) {
          store.delete(key);
          store.delete(keyExpire);
        }
      }
    });
  }

  static setFirstLoginCheck(key, value) {
    store.update(key, value);
  }

  static getFirstLoginCheck(key, defaultValue) {
    return store.get(key).then(data => {
      if (data != null) {
        return data;
      } else {
        return defaultValue;
      }
    });
  }
}
