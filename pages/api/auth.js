import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export default function handle(req, res) {
  console.log("Your Secret: " + serverRuntimeConfig.secret);
  console.log(req.headers);

  res.send({
    'name': 'Johnny'
  });
}