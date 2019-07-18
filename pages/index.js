import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import Layout from './components/Layout';

import { Cookies } from 'react-cookie';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  const cookies = new Cookies();

  const pingEm = async (e) => {
    const {APP_URL} = publicRuntimeConfig;
    const token = cookies.get('token');
    console.log(token);
    try {
      const res = await fetch(`${APP_URL}/api/auth/ping`, {
        headers: { 'authorization': token.token }
      });
      const data = await res.json();
      console.log(data);
    }
    catch (err) { console.log(err); }
  };

  return (
    <Layout>
      <div>
        <h1>Welcome to the world</h1>
        <p>you are now being waaaaaatched</p>
        <div className="jwt__test" onClick={pingEm}>Verify the JWT!</div>
      </div>

      <style jsx="true">{`
        .jwt__test {
          width: 5rem;
          height: 5rem;
          cursor: pointer;
          background-color: gray;
        }
      `}</style>
  </Layout>
  )

};

export default Index;