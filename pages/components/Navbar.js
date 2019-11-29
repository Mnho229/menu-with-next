import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookie, setCookie] = useCookies();

  const handleLogin = async () => {
    const {APP_URL} = publicRuntimeConfig;
  
    let data = {};
    try {
      const res = await fetch(`${APP_URL}/api/auth/login`);
      data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setCookie('token', data.token);
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
        justify-content: flex-end;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
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

