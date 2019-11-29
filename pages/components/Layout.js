import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import Head from 'next/head';
import Navbar from './Navbar';
import { CookiesProvider} from 'react-cookie';
import fetch from 'isomorphic-unfetch';
import Timeout from './Timeout';


const Layout = (props) => {

  return (
    <CookiesProvider>
      <Head>
        <title>Mother</title>
      </Head>
      <Navbar />
      {props.children}

      <Timeout />
  </CookiesProvider>
  );
}

export default Layout;


let testPing = async() => {
  const { APP_URL } = publicRuntimeConfig;

  let data = {};

  try {
    const res = await fetch(`${APP_URL}/api/auth/ping`);
    data = await res.json();
    console.log('ping data: ', data);
  } catch(e) {
    console.log('ping error: ', e);
  }
}