import uaParser from "ua-parser-js";

const parsedUserAgent = uaParser();
console.log(parsedUserAgent);
export const mobileDetected = !!parsedUserAgent.device.type;
