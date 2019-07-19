import articleList from '../../../articles/articles.json';
import verify from './verify';

export default function handle(req, res) {
  //Use req id to search for that particular object in the list
  //myArray.find(x => x.id === '45').foo;
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  //then check the private property to see if it requires jwt

  // verify(token) ?
  // res.json({"msg": "ayyy all good"}) :
  // res.json({"msg": "You shall not pass"});
}