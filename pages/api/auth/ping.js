import verify from './verify';

export default function handle(req, res) {
  const token = req.headers.authorization;
  
  verify(token) ?
  res.json({"msg": "ayyy all good"}) :
  res.json({"msg": "You shall not pass"});
}