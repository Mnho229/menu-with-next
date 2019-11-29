import {verify, getDecodedJWT} from './verify';

export default function handle(req, res) {
  const {cookie} = req.headers;
  const token = cookie.slice(cookie.indexOf("token=") + "token=".length);
  console.log("Token Received:", token);

  //TODO: Fix Bug when you let application sit for too long and reqs don't work well anymore
  //TODO: Add logging for when it does work in verify
  let checkExp = (decodedToken) => {
    console.log(`Expiration (sec): ${decodedToken.exp}`);
    res.json({"msg": "ayyy all good"});  
  }
  
  verify(token) ?
  res.json({"msg": getDecodedJWT().exp}) :
  res.json({"msg": "expired"});
}