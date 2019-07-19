import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Cookies } from 'react-cookie';

const Navbar = () => {
  const cookies = new Cookies();
  // const [cookie, setCookie] = useState(cookies.get('token'));

  const handleLogin = async () => {
    const {APP_URL} = publicRuntimeConfig;
  
    let token = {};
    try {
      const res = await fetch(`${APP_URL}/api/auth/login`);
      token = await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
    cookies.set('token', token);
    // setCookie(token);
  }

  return (
    <div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/content/1"><a>Content</a></Link></li>
        <li><a onClick={handleLogin} >Log In</a></li>
      </ul>

    <style jsx>{`
      ul {
        background: #333;
        color: #fff;
        list-style: none;
        display: flex;
        justify-content: flex-end
      }
      
      ul li {
        font-size: 2rem;
        font-family: sans-serif;
        margin-right: 60px;
      }
      ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </div>
  );
};


export default Navbar

