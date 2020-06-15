import axios from "axios";
import * as qs from "query-string";
import perf from "@react-native-firebase/perf";

import {
  API_ENDPOINT,
  API_OLD_ENDPOINT,
  APP_ID,
  APP_SECRET,
  APP_VERSION_CODE,
  GOOGLE_API_KEY,
  GOOGLE_MAP_API_ENDPOINT,
  REQUEST_TIME_OUT,
  STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK,
  STATUS_UNAUTHORIZED,
  API_ENDPOINT_V2,
  API_ENDPOINT_V4,
  API_ENDPOINT_V5
} from "../Config/Remote";
import StoreHelper from "../Common/StoreHelper";
import TimeHelper from "../Common/TimeHelper";
import FirebaseTrace from "../Common/FirebaseTrace";
import FirebaseAnalytic from "../Common/FirebaseAnalytic";
import LanguageKeySwitcher from "../Common/LanguageKeySwitcher";
import { generateSignature } from "../Common/SignatureHelper";

const traces = {};

const getTrace = url => {
  if (traces[url]) {
    return traces[url];
  } else {
    return FirebaseTrace.startTrace;
  }
};

axios.interceptors.request.use(async function(config) {
  const httpMetric = perf().newHttpMetric(config.url, config.method);
  config.metadata = { httpMetric };
  await httpMetric.start();
  return config;
});

axios.interceptors.response.use(
  async function(response) {
    const { httpMetric } = response.config.metadata;
    httpMetric.putAttribute(
      "start_time",
      TimeHelper.formatDateTime(
        TimeHelper.nowInTimestamp(),
        "DD/MM/YYYY HH:mm:ss"
      )
    );
    httpMetric.setHttpResponseCode(response.status);
    httpMetric.setResponseContentType(response.headers["content-type"]);
    await httpMetric.stop();

    return response;
  },
  async function(error) {
    const { httpMetric } = error.config.metadata;
    httpMetric.putAttribute(
      "end_time",
      TimeHelper.formatDateTime(
        TimeHelper.nowInTimestamp(),
        "DD/MM/YYYY HH:mm:ss"
      )
    );
    httpMetric.setHttpResponseCode(error.response.status);
    httpMetric.setResponseContentType(error.response.headers["content-type"]);
    await httpMetric.stop();
    return Promise.reject(error);
  }
);

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: REQUEST_TIME_OUT,
  headers: {
    "App-Id": APP_ID,
    "App-Secret": APP_SECRET,
    "App-Version": APP_VERSION_CODE
  }
});

const handleSuccess = response => {
  console.log(
    "END:",
    response.config.url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  if (STATUS_OK === response.status) {
    console.log("SUCCESS RESPONSE:", response);
    return response.data;
  } else {
    console.log("200 ERROR RESPONSE:", response);
    throw new Error(response);
  }
};

const handleError = error => {
  console.log("ERROR URL:", error.config.url);
  console.log("ERROR RESPONSE:", error.response);
  console.log("ERROR API:", error);
  console.log(
    "END:",
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );

  const lang = instance.defaults.headers.common["Lang"]
    ? instance.defaults.headers.common["Lang"]
    : "vi";
  const message = LanguageKeySwitcher.switchConnectionError(lang);

  if (error.response) {
    const { status, data } = error.response;
    if (status !== 401) {
      FirebaseAnalytic.logEvent("server_error", {
        time: new Date().getMilliseconds(),
        data: JSON.stringify(data)
      });
    }
    if (status === STATUS_INTERNAL_SERVER_ERROR) {
      return {
        status: false,
        data: "Mã lỗi " + status,
        message: message,
        code: status
      };
    } else {
      if (status === STATUS_UNAUTHORIZED) {
        StoreHelper.dispatchLogout();
      }
      return {
        status: false,
        data: data,
        message: data.message,
        code: status
      };
    }
  }
  return {
    status: false,
    message: message,
    error: error,
    code: 500
  };
};

const GET = (url, config = {}, params = {}) => {
  Object.keys(params).forEach(function(key) {
    if (typeof params[key] == "boolean") {
      params[key] = params[key] === true ? 1 : 0;
    }
  });
  const queryString = qs.stringify(params);
  const signature = generateSignature(params);
  instance.defaults.headers.common["Signature"] = signature;
  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .get(url + "?" + queryString, config)
    .then(handleSuccess)
    .catch(handleError);
};

const POST = (url, params, config = {}) => {
  const signature = generateSignature(params);
  instance.defaults.headers.common["Signature"] = signature;

  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .post(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

const PUT = (url, params, config = {}) => {
  const signature = generateSignature(params);
  instance.defaults.headers.common["Signature"] = signature;
  console.log(
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .put(url, params, config)
    .then(handleSuccess)
    .catch(handleError);
};

const DELETE = (url, config = {}) => {
  console.log(
    "Config",
    config,
    "START:",
    url,
    TimeHelper.formatDateTime(
      TimeHelper.nowInTimestamp(),
      "DD/MM/YYYY HH:mm:ss"
    )
  );
  return instance
    .delete(url, config)
    .then(handleSuccess)
    .catch(handleError);
};

// const DELETE = (url, config = {}) => {
//   return instance
//     .delete(url, config)
//     .then(checkStatus)
//     .catch(logError)
// }

const API = {
  setAccessToken: accessToken => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    instance.defaults.headers.common["Access-Token"] = `${accessToken}`;
  },
  setDeviceId: deviceId => {
    instance.defaults.headers.common["Device-Id"] = deviceId;
  },
  setDeviceName: deviceName => {
    instance.defaults.headers.common["Device-Name"] = deviceName;
  },
  setIpAddress: ipAddress => {
    instance.defaults.headers.common["Ip-Address"] = ipAddress;
  },
  setOneSignalUid: oneSignalUid => {
    instance.defaults.headers.common["One-Signal"] = oneSignalUid;
  },
  setLanguage: lang => {
    instance.defaults.headers.common["Lang"] = lang;
  },
  login: (phone, password) => {
    const path = "auth/login";
    const params = {
      phone: phone,
      password: password
    };
    return POST(path, params, {});
  },
  loginBiometric: phone => {
    const path = "auth/biometric";
    const params = {
      phone: phone
    };
    return POST(path, params, {});
  },
  phoneCheckExist: phone => {
    const path = "auth/phone/exist";
    const params = {
      phone: phone
    };
    return GET(
      path,
      {
        parseString: true
      },
      params
    );
  },
  phoneRegister: phone => {
    const path = "auth/register";
    const data = {
      phone: phone
    };
    return POST(path, data, {});
  },
  sendOTP: phone => {
    const path = "auth/otp";
    const data = {
      phone: phone
    };
    return POST(path, data, {});
  },
  confirmOTP: (phone, otp) => {
    const path = "auth/otp/confirm";
    const data = {
      phone: phone,
      otp: otp
    };
    return POST(path, data, {});
  },
  userActivation: (phone, password) => {
    const path = "auth/activate";
    const data = {
      phone: phone,
      password: password
    };
    return POST(path, data, {});
  },
  validateToken: () => {
    const path = "auth/token/validation";
    return GET(path);
  },
  refreshToken: () => {
    const path = "auth/token/refresh";
    return POST(path);
  },
  logout: () => {
    const path = "auth/logout";
    return POST(path);
  },
  me: () => {
    const path = "/customer";
    return GET(path);
  },
  updateProfile: params => {
    const path = "/customer";
    return PUT(path, params);
  },
  uploadAvatar: avatar => {
    const formData = new FormData();
    formData.append("avatar", {
      uri: avatar.uri,
      type: avatar.type,
      name: avatar.fileName
    });
    const path = "customer/avatar";
    return POST(path, formData);
  },
  removeAvatar: () => {
    const path = "customer/avatar/remove";
    return PUT(path, {});
  },
  confirmPassword: password => {
    const path = "/customer/password/confirm";
    const data = {
      password: password
    };
    return POST(path, data, {});
  },
  changePassword: password => {
    const path = "/customer/password";
    const data = {
      password: password
    };
    return PUT(path, data, {});
  },
  getBrandList: params => {
    const path = "/brand";
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  getBrandPopular: params => {
    const path = "/brand/populars";
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  filterBrandOffice: params => {
    const path = "/brand/office/filter";
    return GET(path, {}, params);
  },
  getBrandOffices: params => {
    const path = `/list_brand/${params.brand_id}`;
    return GET(path, {}, params);
  },
  getBrandDetail: id => {
    const params = {
      id: id
    };
    const path = `/brand/${id}`;
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  getCategoryFilter: params => {
    const path = "/filter/category";
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  getCityFilter: () => {
    const path = "/city";
    return GET(path);
  },
  getCities: () => {
    const path = "address/cities";
    return GET(path, {
      baseURL: API_ENDPOINT_V5
    });
  },
  getDistricts: params => {
    const path = "address/districts";
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V5
      },
      params
    );
  },
  getWards: params => {
    const path = "address/wards";
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V5
      },
      params
    );
  },
  setAddress: params => {
    const path = "address/insert-address";
    return POST(path, params, {
      baseURL: API_ENDPOINT_V5
    });
  },
  updateAddress: params => {
    const path = "address/update-address";
    return PUT(path, params, {
      baseURL: API_ENDPOINT_V5
    });
  },
  deleteAddress: params => {
    const path = "address/delete-address";
    return DELETE(path, {
      baseURL: API_ENDPOINT_V5,
      params
    });
  },
  getUserAddress: () => {
    const path = "address/my-address";
    return GET(path, {
      baseURL: API_ENDPOINT_V5
    });
  },
  calculatorPhysical: params => {
    const path = "shipping/calculator-physical";

    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V5
      },
      params
    );
  },
  getVoucherList: params => {
    const path = `gift/lists`;
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V4
      },
      params
    );
  },

  getPhysicGiftDetail: id => {
    const params = {
      id: id
    };
    const path = `gift/detail`;
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V4
      },
      params
    );
  },

  getVoucherDetail: id => {
    const lang = instance.defaults.headers.common["Lang"]
      ? instance.defaults.headers.common["Lang"]
      : "vi";
    const params = {
      lang: lang
    };
    const path = `/voucher/${id}/`;
    return GET(path, {}, params);
  },

  getAvailableVouchers: walletId => {
    const path = `5.0/wallet/allVoucher?wallet_id=${walletId}`;
    return GET(path, {
      baseURL: API_OLD_ENDPOINT
    });
  },
  getMyVouchers: (walletId, cardIds) => {
    const path = "/my-vouchers";
    const params = {
      wallet_id: walletId
    };
    return GET(path, {}, params);
  },

  getMyActiveVouchers: (walletId, cardIds) => {
    const path = "voucher/active-voucher";
    // const queryString = qs.stringify({
    //   wallet_id: walletId
    // });
    // return GET(path + "?" + queryString, {
    //   baseURL: API_ENDPOINT_V4
    // });
    return GET(path, {
      baseURL: API_ENDPOINT_V4
    });
  },
  getMyUsedVouchers: (walletId, cardIds) => {
    const path = "voucher/used-voucher";
    // const queryString = qs.stringify({
    //   wallet_id: walletId
    // });
    return GET(path, {
      baseURL: API_ENDPOINT_V4
    });
  },
  getMyVoucherDetail: (walletId, cardIds, groupIds, lang, page) => {
    const path = `voucher/detail-voucher`;
    const params = {
      // wallet_id: walletId,
      "voucher_id[]": groupIds,
      page: page,
      per_page: 10,
      select_id: groupIds[0]
      // lang: lang
    };
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V4
      },
      params
    );
  },
  viewMyVoucher: params => {
    const path = "gift/view";
    return POST(path, params, {
      baseURL: API_ENDPOINT_V4
    });
  },
  getWalletTransactionList: () => {
    const path = `transactions/wallet`;
    return GET(path);
  },
  getCardTransactionList: () => {
    const path = `transactions/card`;
    return GET(path);
  },
  getWalletTransactionDetail: transactionId => {
    const path = `/transaction/wallet/${transactionId}`;
    return GET(path);
  },
  getCardTransactionDetail: transactionId => {
    const path = `/transaction/card/${transactionId}`;
    return GET(path);
  },
  getMyCards: params => {
    const path = `my-cards`;
    return GET(path, {}, params);
  },
  getCard: cardNumber => {
    const path = `card/${cardNumber}`;
    return GET(path);
  },
  getBanners: () => {
    const path = `banners`;
    const params = {
      limit: 6
    };
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  getNews: () => {
    const params = {
      limit: 10
    };
    const path = `news`;
    return GET(
      path,
      {
        baseURL: API_ENDPOINT_V2
      },
      params
    );
  },
  getNewsDetail: newId => {
    const path = `/new/${newId}`;
    return GET(path, {
      baseURL: API_ENDPOINT_V2
    });
  },
  getCardQR: params => {
    const path = `qr-code`;
    return GET(path, {}, params);
  },
  markUsedVoucher: id => {
    const path = `/voucher/${id}/used`;
    return PUT(path);
  },
  addCard: (cardNumber, pin) => {
    const path = `my-card`;
    const data = {
      card_no: cardNumber,
      pin: pin
    };
    return POST(path, data);
  },
  convert: (walletId, cardNumbers, money) => {
    const path = `/wallet/merge-all-card`;
    const data = {
      wallet_id: walletId,
      card_id: cardNumbers
    };
    return POST(path, data, {
      baseURL: API_ENDPOINT_V5
    });
  },
  buyByCard: (
    cardId,
    buyerPhone,
    buyerEmail,
    buyerName,
    data = [{ priceId: 0, quantity: 1 }],
    coupon = "",
    addressId = null
  ) => {
    const path = "/2.0/cart/cartApp";
    const params = {
      access_urbox: APP_SECRET,
      agent_site: APP_ID,
      card_id: cardId,
      ttphone: buyerPhone,
      ttemail: buyerEmail,
      ttfullname: buyerName,
      dataBuy: data,
      address_id: addressId
    };

    if (coupon !== "") {
      params.ttcoupon = coupon;
    }
    return POST(path, params, {
      baseURL: API_OLD_ENDPOINT
    });
  },
  buyByWallet: (
    walletId,
    buyerPhone,
    buyerEmail,
    buyerName,
    data = [{ priceId: 0, quantity: 1 }],
    coupon = "",
    addressId = null
  ) => {
    const path = "/5.0/cart/buy";
    const params = {
      wallet_id: walletId,
      ttphone: buyerPhone,
      ttemail: buyerEmail,
      ttfullname: buyerName,
      dataBuy: data,
      address_id: addressId
    };

    if (coupon !== "") {
      params.ttcoupon = coupon;
    }
    return POST(path, params, {
      baseURL: API_OLD_ENDPOINT
    });
  },
  getLocationAddress: (latitude, longitude) => {
    const path = "maps/api/geocode/json";
    const latlng = [latitude, longitude].join(",");
    const params = {
      key: GOOGLE_API_KEY,
      latlng: latlng,
      sensor: false
      // result_type: 'locality'
    };
    return GET(
      path,
      {
        baseURL: GOOGLE_MAP_API_ENDPOINT
      },
      params
    );
  },
  activateVoucher: cartDetailId => {
    const path = "/5.0/gift/activate";
    const params = {
      id: cartDetailId
    };
    return POST(path, params, {
      baseURL: API_OLD_ENDPOINT
    });
  },
  syncCards: () => {
    const path = "/my-cards/sync";
    const data = {};
    return POST(path, data);
  },
  registerBiometric: () => {
    const path = "/auth/biometric/register";
    const params = {};
    return POST(path, params, {});
  },
  unregisterBiometric: () => {
    const path = "/auth/biometric/unregister";
    const params = {};
    return POST(path, params, {});
  },
  registerOneSignal: () => {
    const path = "notification/register";
    return POST(path, {}, {});
  },
  unregisterOneSignal: () => {
    const path = "notification/unregister";
    return PUT(path, {}, {});
  },
  review: params => {
    const path = "customer/review";
    return POST(path, params, {});
  }
};

export default API;
