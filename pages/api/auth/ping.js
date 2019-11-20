import verify from './verify';

export default function handle(req, res) {
  const token = req.headers.authorization;

  //TODO: Make Auth verify return data in another route probably
  let checkExp = (decodedToken) => {
    console.log(`Expiration (sec): ${decodedToken.exp}`);
    res.json({"msg": "ayyy all good"});  
  }
  
  verify(token) ?
  res.json({"msg": "ayyy all good"}) :
  res.json({"msg": "You shall not pass"});
}