import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const jwtSecret = serverRuntimeConfig.secret;

import jwt from 'jsonwebtoken';

const verify = (token) => {
  let stringDash = '-------------------------------------------';

  try {
    console.log(stringDash + "VERIFYING" + stringDash);
    var decoded = jwt.verify(token, jwtSecret);
    return true;
  } catch (err) {
    console.log("error: ", err);
    return false;
  }
}

export default verify;