import articles from '../../../articles/articles.json';
import verify from '../auth/verify';
import { useRouter } from 'next/router';

export default function handle(req, res) {
  const token = req.headers.authorization;
  console.log('token', req.headers);
  const { query: { id } } = req;
  //Use req id to search for that particular object in the list
  let article;
  try {
    article = articles.find(x => x.id === `${id}`);
    if (typeof article === 'undefined') throw "Article is not found";
  } catch(e) {
    res.status(204).json({error: e});
  }

  article.private === 'false' ? 
  res.status(200).json(article) :
    verify(token) ?
    res.status(200).json(article) :
    res.status(403).json({
      "message": "Not Authorized"
    });
}