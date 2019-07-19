import articleList from '../../../articles/articlelist.json';

export default function handle(req, res) {
  res.json(articleList);
}