import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const jwtSecret = serverRuntimeConfig.secret;

import jwt from 'jsonwebtoken';

let stringDash = '-------------------------------------------';
let decoded;

const verify = (token) => {

  try {
    console.log(stringDash + "VERIFYING" + stringDash);
    decoded = jwt.verify(token, jwtSecret);
    return true;
  } catch (err) {
    console.log("error: ", err);
    return false;
  }
}

const getDecodedJWT = () => decoded;

export {verify, getDecodedJWT};
