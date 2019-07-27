import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const jwtSecret = serverRuntimeConfig.secret;

import jwt from 'jsonwebtoken';
import data from '../../../articles/articles.json';

export default function handle(req, res) {
  console.log("generating...");
  const token = jwt.sign({"username": "Mike"}, jwtSecret, { expiresIn: 60});
  res.status(200).json({"token": token});
}