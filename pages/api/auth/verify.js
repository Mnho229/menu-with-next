import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const jwtSecret = serverRuntimeConfig.secret;

import jwt from 'jsonwebtoken';

const verify = (token) => {
  try {
    console.log("Verifying...");
    var decoded = jwt.verify(token, jwtSecret);
    return true;
  } catch (err) {
    return false;
  }
}

export default verify;