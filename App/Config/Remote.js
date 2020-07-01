import Config from "react-native-config";

export const API_ENDPOINT = Config.API_ENDPOINT;
export const API_OLD_ENDPOINT = Config.API_OLD_ENPOINT;
export const API_ENDPOINT_V2 = Config.API_ENDPOINT_V2;
export const API_ENDPOINT_V4 = Config.API_ENDPOINT_V4;
export const API_ENDPOINT_V5 = Config.API_ENDPOINT_V5;
export const APP_ID = Config.APP_ID;
export const APP_SECRET = Config.APP_SECRET;
export const APP_ENV = Config.APPLICATION_ENVIRONMENT;
export const APP_VERSION = Config.APPLICATION_VERSION_NAME;
export const APP_VERSION_CODE = Config.APPLICATION_VERSION_CODE;
export const REQUEST_TIME_OUT = 10000;
export const PRIVATE_KEY = Config.PRIVATE_KEY;

export const GOOGLE_API_KEY = Config.GOOGLE_API_KEY;
export const GOOGLE_MAP_API_ENDPOINT = Config.GOOGLE_MAP_API_ENDPOINT;

export const ONE_SIGNAL_APP_ID = Config.ONE_SIGNAL_APP_ID;

export const FRESH_CHAT_APP_ID = Config.FRESH_CHAT_APP_ID;
export const FRESH_CHAT_APP_KEY = Config.FRESH_CHAT_APP_KEY;

export const ENABLE_LOG = Config.ENABLE_LOG;

console.log("API ENDPOINT:", API_ENDPOINT);
console.log("API OLD ENDPOINT:", API_OLD_ENDPOINT);
console.log("APP ID:", APP_ID);
console.log("APP SECRET:", APP_SECRET);
console.log("APP ENV:", APP_ENV);
console.log("APP VERSION:", APP_VERSION);
console.log("APP VERSION CODE:", APP_VERSION_CODE);
console.log("ONE SIGNAL APP ID", ONE_SIGNAL_APP_ID);
console.log("FRESH CHAT APP ID", FRESH_CHAT_APP_ID);
console.log("FRESH CHAT APP KEY", FRESH_CHAT_APP_KEY);
console.log("ENABLE LOG", ENABLE_LOG);

// if (!ENABLE_LOG) {
//   console.log = () => {};
// }

export const STATUS_OK = 200;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 410;
export const STATUS_NOT_FOUND = 404;
export const STATUS_INTERNAL_SERVER_ERROR = 500;
export const STATUS_BAD_GATEWAY = 502;
export const STATUS_GATE_WAY_TIMEOUT = 504;
